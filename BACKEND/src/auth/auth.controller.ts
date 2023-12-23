import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './login.dto';
import { Public } from './public.decorator';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Public()
  @Post('signIn')
  signIn(@Body() loginDto: LoginDto) {
    return this.authService.signIn(loginDto.login, loginDto.password);
  }
}
