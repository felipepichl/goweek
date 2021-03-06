import { Repository, getCustomRepository } from 'typeorm';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

import auth from '@config/auth';

import { User } from '@entities/User';
import { UsersRepository } from '../../repositories/UsersRepository';

import { AppError } from '../../error/AppError';

import userView, { IUser } from '../../views/UserView';

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: IUser;
  token: string;
}

class SessionServices {
  private usersRepository: Repository<User>;

  constructor() {
    this.usersRepository = getCustomRepository(UsersRepository);
  }

  public async execute({ email, password }: IRequest): Promise<IResponse> {
    const user = await this.usersRepository.findOne({ email });

    if (!user) {
      throw new AppError('Incorrect Email/Password');
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new AppError('Incorrect Email/Password');
    }

    const { secret, expiresIn } = auth.jwt;

    const token = sign({}, secret, {
      subject: user.id,
      expiresIn,
    });

    return { user: userView.render(user), token };
  }
}

export { SessionServices };
