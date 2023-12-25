import { IsEmail, IsInt, IsString, Length } from 'class-validator';

export class RegisterDto {
  @IsString()
  firstname: string;

  @IsString()
  lastname: string;

  @IsString()
  address: string;

  @IsInt()
  postCode: number;

  @IsString()
  city: string;

  @IsEmail()
  email: string;

  @IsString()
  @Length(1, 1)
  sex: string;

  @IsString()
  login: string;

  @IsString()
  password: string;

  @IsString()
  confirmation: string;

  @IsString()
  @Length(20)
  telephone: string;
}
