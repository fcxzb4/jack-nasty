import { Body, Controller, Post, Req, Res, UseGuards, Get} from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { loginDTO } from './dto/login.dto';
import type { Response } from 'express';
import { JwtAuthGuard } from './guards/jwt.auth.guards';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(@Body() registerDto: RegisterDto, @Res() res: Response) {
    const {access_token } = await this.authService.register(registerDto);

    res.cookie('access_token ', access_token , {
      httpOnly: true,
      secure: false, // coloque true em produção com HTTPS
      sameSite: 'lax',
      maxAge:1000* 60 * 60 * 1,
    });

    return res.json(access_token );
  }

  @Post('login')
  async login(@Body() loginDto: loginDTO, @Res() res: Response) {
    const {access_token } = await this.authService.login(loginDto);

    res.cookie('access_token ', access_token , {
      httpOnly: true,
      secure: false,
      sameSite: 'lax',
      maxAge: 24 * 60 * 60 * 1000,
    });

    return res.json(access_token);
  }

  @UseGuards(JwtAuthGuard)
  @Get('me')
  getMe(@Req() req: any) {
    return req.user
  }

  @Post('logout')
  logout(@Res() res: Response) {
    res.clearCookie('jwt');
    return{message: 'Logout realizado com sucesso'}
  }
}
