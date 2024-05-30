import { IsEmail, IsNotEmpty } from "class-validator";

export class AgainVerifyDto {

  @IsNotEmpty()
  @IsEmail()
  email: string;
}