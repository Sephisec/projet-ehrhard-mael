import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './user.model';
import { RegisterDto } from '../auth/register.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User) private userModel: typeof User) {}

  async findAll(): Promise<User[]> {
    return this.userModel.findAll();
  }

  findOne(login: string): Promise<User> {
    return this.userModel.findOne({
      where: {
        login: login,
      },
    });
  }

  async createOne(registerDto: RegisterDto) {
    return this.userModel.create({ ...registerDto });
  }

  async remove(id: string): Promise<void> {
    const user = await this.findOne(id);
    await user.destroy();
  }
}
