import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './strategis/jwt.strategy';

@Module({
  imports: [
    PassportModule.register({defaultStrategy: "jwt"}),
    JwtModule.register({
      secret:"SEU_SEGREDO_SUPER_SECRETO_E_LONGO_123456",
      signOptions:{
        expiresIn:'1h'
      }
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
})
export class AuthModule {}