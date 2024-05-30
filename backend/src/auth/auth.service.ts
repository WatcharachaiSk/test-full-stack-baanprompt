import { ConflictException, HttpException, HttpStatus, Injectable, InternalServerErrorException, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthGuard } from './auth.guard';
import { UserService } from 'src/user/user.service';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { MailService } from '@sendgrid/mail';
import { config } from 'dotenv';
import * as bcrypt from 'bcrypt';
import { LoginDto } from './dto/login';
import { AgainVerifyDto } from './dto/again-verify';

config(); // loads environment variables from .env file
const { SENDGRID_API_KEY, URL_BASE, URL_BASE_FE } = process.env;
@Injectable()
export class AuthService {
  constructor(
    private readonly mailService: MailService,
    private readonly jwtService: JwtService,
    private readonly userService: UserService,
    private readonly authGuard: AuthGuard
  ) {
    this.mailService.setApiKey(SENDGRID_API_KEY);
  }


  async signIn(loginDto: LoginDto): Promise<{ access_token: string }> {
    const user = await this.userService.findOneEmail(loginDto.email);
    if (!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }

    if (bcrypt.compareSync(loginDto?.password, user?.password)) {

      if (!user.isActive) {
        throw new HttpException('User not active', HttpStatus.FORBIDDEN);
      }
      if (!user.verify) {
        throw new HttpException('Email not verified', HttpStatus.FORBIDDEN);
      }
      const payload = { sub: user.id, username: user.email };
      return {
        access_token: await this.jwtService.signAsync(payload),
      };
    } else {
      throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);
    }

  }

  async create(createUserDto: CreateUserDto) {
    try {
      const respose = await this.userService.create(createUserDto)
      const { email } = respose
      const token = this.generateVerificationToken(email)
      await this.sendVerificationEmail(email, token)
      return respose
    } catch (error) {
      throw error;
    }
  }

  generateVerificationToken(email: string): string {
    return this.jwtService.sign({ email });
  }

  async verifyEmaile(token: string) {
    try {
      const verify = await this.authGuard.verifyEmaile(token)
      if (verify.isSeccess) {

        const result = await this.userService.verifyEmailSeccess(verify.user.email)
        return `
        <div style="display: flex; justify-content: center; align-items: center; height: 100vh; text-align: center;">
          <div>
            <p>Verify email is success ${result.email}</p>
            <a href="${URL_BASE_FE}" style="
              display: inline-block;
              padding: 10px 20px;
              margin-top: 20px;
              font-size: 16px;
              color: #fff;
              background-color: #007bff;
              border-radius: 5px;
              text-decoration: none;
            ">Go to Login</a>
          </div>
        </div>
      `;
      } else {
        return `
        <div style="display: flex; justify-content: center; align-items: center; height: 100vh; text-align: center;">
          <div>
            <p>verify email error</p>
          </div>
        </div>
      `;
      }
    } catch (error) {
      throw error
    }
  }

  async againSendVerificationEmail(againVerifyDto: AgainVerifyDto) {
    const user = await this.userService.findOneEmail(againVerifyDto.email);
    if (!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }
    if (!user.isActive) {
      throw new HttpException('User not active', HttpStatus.FORBIDDEN);
    }
    if (user.verify) {
      throw new ConflictException('Email verified exists');
    }
    try {
      const { password, ...response } = user
      const token = this.generateVerificationToken(response.email)
      await this.sendVerificationEmail(response.email, token)
      return response
    } catch (error) {
      throw error
    }

  }

  async sendVerificationEmail(email: string, token: string): Promise<void> {
    const url = `${URL_BASE}/auth/verify-email?token=${token}`;
    const expiryTime = '1 day';

    const msg = {
      to: email,
      from: 'watcharachai.sk@gmail.com',
      subject: 'Email Verification',
      html: `Click <a href="${url}">here</a> to verify your email. Please note that you have ${expiryTime} to complete the verification process.`,
    };

    try {
      await this.mailService.send(msg);
    } catch (error) {
      console.error('Error sending email:', error);
      throw new InternalServerErrorException('Failed to send email', error);
    }
  }


}
