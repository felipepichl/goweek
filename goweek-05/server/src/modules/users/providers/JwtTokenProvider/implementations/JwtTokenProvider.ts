import { sign } from 'jsonwebtoken';

import auth from '@config/auth';
import IJwtTokenProvider from '../models/IJwtTokenProvider';

class JwtTokenProvider implements IJwtTokenProvider {
  public async tokenGenerate(user_id: string): Promise<string> {
    const { secret, expiresIn } = auth.jwt;

    const token = sign({}, secret, {
      subject: String(user_id),
      expiresIn,
    });

    return token;
  }
}

export default JwtTokenProvider;
