import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async signIn(login: string, password_: string) {
    const user = await this.usersService.findOne(login);
    if (user?.password === password_) {
      const payload = { id: user.id, login: user.login };
      return {
        access_token: await this.jwtService.signAsync(payload),
        user: {
          firstname: user.firstname,
          lastname: user.lastname,
          email: user.email,
        },
      };
    }
    throw new UnauthorizedException();
  }
}
