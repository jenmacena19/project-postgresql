import { IsEmail, IsNotEmpty, MinLength } from "class-validator";

export class CreateUserDto {
  @IsNotEmpty()
  username: string;

  email: string;
  password: string;
  name: string;
  perfil: string;
}