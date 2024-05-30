import { Body, Controller, Get, HttpCode, HttpStatus, Post, Query, UseGuards, Request, } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { LoginDto } from './dto/login';
import { AuthGuard } from './auth.guard';
import { AgainVerifyDto } from './dto/again-verify';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {

  }

  @Get('/verify-email')
  verifyEmaile(@Query('token') token: string) {
    return this.authService.verifyEmaile(token);
  }

  @Post('/resend-verify-email')
  againSendVerificationEmail(@Body() againVerifyDto: AgainVerifyDto) {
    return this.authService.againSendVerificationEmail(againVerifyDto);
  }

  @HttpCode(HttpStatus.OK)
  @Post('/login')
  signIn(@Body() loginDto: LoginDto) {
    return this.authService.signIn(loginDto);
  }

  @Post('/register')
  create(@Body() createUserDto: CreateUserDto) {
    return this.authService.create(createUserDto);
  }

  @UseGuards(AuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }

}
