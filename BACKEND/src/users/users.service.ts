import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './user.model';
import { RegisterDto } from '../auth/register.dto';
import { ValidationError } from 'sequelize';

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
    try {
      const created = await this.userModel.create({ ...registerDto });
      delete created.password;
      return created;
    } catch (e) {
      if (e instanceof ValidationError) {
        throw new BadRequestException(
          'Sorry, this login is already in use. Please choose a different one.',
        );
      }
      throw e;
    }
  }

  async remove(id: string): Promise<void> {
    const user = await this.findOne(id);
    await user.destroy();
  }
}
