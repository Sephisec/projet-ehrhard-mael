import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {}

  async signIn(login: string, password_: string) {
    const user = await this.usersService.findOne(login);
    if (user?.password === password_) {
      delete user.password;
      return user;
    }
    throw new UnauthorizedException();
  }
}
