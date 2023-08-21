import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { BasicStrategy as BaseBasicStrategy } from 'passport-http';
import { AuthService } from './auth.service';

@Injectable()
export class BasicStrategy extends PassportStrategy(BaseBasicStrategy) {
  constructor(private readonly authService: AuthService) {
    super();
  }

  async validate(username: string, password: string): Promise<any> {
    // const user = await this.authService.validateUser(username, password);
    // if (!user) {
    //   throw new UnauthorizedException();
    // }
    return {username:username,password:password};
  }
}
