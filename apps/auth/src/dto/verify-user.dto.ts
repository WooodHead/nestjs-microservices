import { IsString, IsEmail } from 'class-validator';

export class VerifyUserDto {
  @IsEmail()
  @IsString()
  email: string;

  @IsString()
  verificationCode: string;
}
