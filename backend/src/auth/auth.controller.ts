import {
  Controller,
  Request,
  Post,
  UseGuards,
  Body,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { UsersService } from '../users/users.service';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private usersService: UsersService,
  ) {}

  @Post('login')
  async login(@Body() body) {
    const user = await this.authService.validateUser(
      body.username,
      body.password,
    );
    if (!user) {
      return { statusCode: 401, message: 'Invalid credentials' };
    }
    return this.authService.login(user);
  }

  @Post('register')
  async register(@Body() registerDto: any) {
    try {
      const user = await this.usersService.create(registerDto);
      return { message: '회원가입이 완료되었습니다.' };
    } catch (error) {
      throw new HttpException(
        '회원가입 중 오류가 발생했습니다.',
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
