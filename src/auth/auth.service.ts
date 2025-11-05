import { Injectable, ConflictException } from '@nestjs/common';
import { RegisterDTO } from './dto/register.dto';
import { User } from './model/user.interface';
import { users } from './model/user.bd';
import * as bcrypt from 'bcryptjs';


@Injectable()
export class AuthService{
private static idcounter = 1;

 async register(RegisterDTO: RegisterDTO); promise<Omit<User , 'senha'>>{
    const existingUser = users.find(
        (user) => user.email === RegisterDTO.email,
    );

    if(existingUser) {
            throw new ConflictException('O e-mail fornecido já está em uso');
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(RegisterDTO.senha,salt)

    const newUser: User = {
      id: AuthService.idCounter++,
      nome: RegisterDTO.nome,
      email: RegisterDTO.email,
      senha: hashedPassword,
    };

    users.push(newUser);

    const { senha, ...result } = newUser;
    return result;
  }
}