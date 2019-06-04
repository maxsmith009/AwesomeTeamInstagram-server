import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { sign } from 'jsonwebtoken';
require('dotenv').config();

export enum Provider
{
  GOOGLE = 'google'
}

@Injectable()
export class AuthService {

  private readonly JWT_SECRET_KEY = process.env.JWT_SEKRET_KEY;

  constructor() {
  };

  async validateOAuthLogin(thirdPartyId: string, provider: Provider): Promise<string>
  {
    try
    {
      const payload = {
        thirdPartyId,
        provider
      };

      const jwt: string = sign(payload, this.JWT_SECRET_KEY, { expiresIn: 3600 });
      return jwt;
    }
    catch (err)
    {
      throw new InternalServerErrorException('validateOAuthLogin', err.message);
    }
  }

}
