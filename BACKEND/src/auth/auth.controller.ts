import { BadRequestException, Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './login.dto';
import { Public } from './public.decorator';
import { RegisterDto } from './register.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Public()
  @Post('signIn')
  signIn(@Body() loginDto: LoginDto) {
    return this.authService.signIn(loginDto.login, loginDto.password);
  }

  @Public()
  @Post('/register')
  async register(@Body() registerDto: RegisterDto) {
    if (registerDto.password !== registerDto.confirmation) {
      throw new BadRequestException("Password and confirmation don't match");
    }
    const user = await this.authService.register(registerDto);
    if (user) {
      return this.authService.signIn(user.login, user.password);
    }
  }
}
