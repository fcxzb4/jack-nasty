import { Controller, Get, Param } from '@nestjs/common';
import {Body,Controller,Delete,Get,Param,ParseIntPipe,Post,Put,NotFoundException,} from '@nestjs/common';


@Controller('auth')
export class AuthController{
  constructor(private readonly authService: AuthService) {}
  
  @Post('register')
  async register(@Body() registerDto: RegisterDto) {
    return this.authService.register(registerDto);
  }
}