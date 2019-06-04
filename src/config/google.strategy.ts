import { Strategy } from 'passport-google-oauth20';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { AuthService, Provider } from '../auth/auth/auth.service';

require('dotenv').config();

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor(private readonly authService: AuthService) {
    super({
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: '/auth/google/callback',
      passReqToCallback: true,
      scope: ['profile']
    });
  }

  async validate(request: any, accessToken: string, refreshToken: string, profile, done: Function)
  {
    try
    {
      console.log(profile);

      const jwt: string = await this.authService.validateOAuthLogin(profile.id, Provider.GOOGLE);
      const user =
        {
          jwt
        };

      done(null, user);
    }
    catch(err)
    {
      // console.log(err)
      done(err, false);
    }
  }

}
