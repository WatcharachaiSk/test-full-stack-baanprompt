import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class CreateUserDto {
  @IsNotEmpty()
  @IsEmail()
  email: string

  @IsNotEmpty()
  @IsString()
  password: string

  @IsNotEmpty()
  @IsString()
  thaiFirstName: string

  @IsNotEmpty()
  @IsString()
  thaiLastName: string

  @IsNotEmpty()
  @IsString()
  engFirsName: string

  @IsNotEmpty()
  @IsString()
  engLastName: string

  phoneNumber: string
}
