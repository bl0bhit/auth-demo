import { UsersModule } from './../users/users.module';
import { PassportModule } from '@nestjs/passport/dist';
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';
import {JwtModule} from '@nestjs/jwt'
import { JwtStrategy } from './jwt.strategy';
import { AuthController } from './auth.controller';

@Module({
  imports: [UsersModule, PassportModule, JwtModule.register({
    secret: 'SECRET', //put in env variables
    signOptions: {expiresIn: '120s'}
  })],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  exports: [AuthService],
  controllers: [AuthController]
})
export class AuthModule {}
