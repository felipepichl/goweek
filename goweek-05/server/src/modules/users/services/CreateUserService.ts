import { injectable, inject } from 'tsyringe';
import { sign } from 'jsonwebtoken';

import auth from '@config/auth';

import AppError from '@shared/errors/AppError';
import IGutHubProvider from '../providers/GitHubProvider/models/IGitHubProvider';

import User from '../infra/typeorm/schemas/User';
import IUsersRepository from '../repositories/IUsersRepository';

interface IRequest {
  login: string;
}

interface IResponse {
  user: User;
  token: string;
}

@injectable()
class CreateUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,

    @inject('GitHubProvider')
    private gitHubProvider: IGutHubProvider,
  ) {}

  public async execute({ login }: IRequest): Promise<IResponse> {
    const userGitHub = await this.gitHubProvider.findUser(login);

    if (!userGitHub) {
      throw new AppError('User do not found in GitHub', 401);
    }

    const { name, bio, avatar_url } = userGitHub;

    // const userMongo = await this.usersRepository.findByName(name);

    // if (userMongo) {
    //   return { userMongo };
    // }

    const user = await this.usersRepository.create({
      login,
      name,
      bio,
      avatar_url,
    });

    const { secret, expiresIn } = auth.jwt;

    const token = sign({}, secret, {
      subject: String(user.id),
      expiresIn,
    });

    return { user, token };
  }
}

export default CreateUserService;
