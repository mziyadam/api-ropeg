// auth.service.ts

import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  // Replace this with your actual user validation logic
  async validateUser(username: string, password: string): Promise<any> {
    // Example logic: Check if the user exists and the password is correct
    // const user = await findUserByUsername(username);
    // if (user && user.password === password) {
    //   return user;
    // }
    return {
        username:username,
        password:password
    };
  }
}
