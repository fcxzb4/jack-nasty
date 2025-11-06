import { Injectable, ConflictException } from '@nestjs/common';
import { UserI } from './model/user.interface';
import { users } from './model/user.bd';
import * as bcrypt from 'bcryptjs';
import { RegisterDto } from './dto/register.dto';


@Injectable()
export class AuthService {
  private static idCounter = 1;

  async register(registerDto: RegisterDto): Promise<Omit<UserI, 'password'>> {
    const existingUser = users.find(
      (user) => user.email === registerDto.email,
    );

    if (existingUser) {
      throw new ConflictException('O e-mail fornecido já está em uso');
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(registerDto.password, salt);

    const newUser: UserI = {
      id: AuthService.idCounter++,
      name: registerDto.name,
      email: registerDto.email,
      bd: registerDto.bd,
      password: hashedPassword,
    };

    users.push(newUser);

    const { password, ...result } = newUser;
    return result;
  }
}