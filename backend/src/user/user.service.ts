import { ConflictException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserEntity } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { saltOrRounds } from 'src/constant/saltOrRounds';


@Injectable()
export class UserService {

  constructor(
    @InjectRepository(UserEntity) private userRepository: Repository<UserEntity>,
  ) { }

  async create(createUserDto: CreateUserDto) {
    try {
      const user = new UserEntity();
      const createUser = this.userRepository.create({
        email: createUserDto.email,
        password: await user.hashPassword(createUserDto.password, saltOrRounds),
        thaiFirstName: createUserDto.thaiFirstName,
        thaiLastName: createUserDto.thaiLastName,
        engFirsName: createUserDto.engFirsName,
        engLastName: createUserDto.engLastName,
        phoneNumber: createUserDto.phoneNumber,
      })
      const saveUser = await this.userRepository.save(createUser)
      const { password, ...respose } = saveUser
      return respose
    } catch (error) {
      if (error?.code === 'ER_DUP_ENTRY' || error?.code === '23505') {
        throw new ConflictException('Email already exists');
      }
      throw error;
    }
  }

  findAll() {
    return `This action returns all user`;
  }

  async findOne(id: number) {
    try {
      const user = await this.userRepository.findOne({ where: { id: id } })
      return user
    } catch (error) {
      throw error
    }
  }

  async findOneEmail(email: string) {
    try {
      const user = await this.userRepository.findOne({ where: { email: email } })
      return user
    } catch (error) {
      throw error
    }
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }

  async verifyEmailSeccess(email: string) {
    try {
      const user = await this.findOneEmail(email)
      user.verify = true
      const result = await this.userRepository.save(user)
      return result
    } catch (error) {
      throw error
    }
  }

}
