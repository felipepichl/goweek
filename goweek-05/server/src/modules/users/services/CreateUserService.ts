import { injectable, inject } from 'tsyringe';
import { sign } from 'jsonwebtoken';

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

    const token = sign({}, '954eef6d6eac59aca304b6d7abb4fb3e', {
      subject: String(user.id),
      expiresIn: '1d',
    });

    return { user, token };
  }
}

export default CreateUserService;
