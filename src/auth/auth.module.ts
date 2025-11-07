import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    PassportModule.register({defaultStrategy: "jwt"}),
    JwtModule.register({
      secret:"PELO_AMOR_DE_DEUS_SEU_JOAO_1234",
      signOptions:{
        expiresIn:'1h'
      }
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
