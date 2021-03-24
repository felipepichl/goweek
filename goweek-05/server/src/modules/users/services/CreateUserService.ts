import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';
import IGutHubProvider from '../providers/GitHubProvider/models/IGitHubProvider';

import User from '../infra/typeorm/schemas/User';
import IUsersRepository from '../repositories/IUsersRepository';

interface IRequest {
  login: string;
}

@injectable()
class CreateUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,

    @inject('GitHubProvider')
    private gitHubProvider: IGutHubProvider,
  ) {}

  public async execute({ login }: IRequest): Promise<User> {
    const userGitHub = await this.gitHubProvider.findUser(login);

    if (!userGitHub) {
      throw new AppError('User do not found in GitHub', 401);
    }

    const { name, bio, avatar_url } = userGitHub;

    const userInMongo = await this.usersRepository.findByName(name);

    if (userInMongo) {
      return userInMongo;
    }

    const user = await this.usersRepository.create({
      login,
      name,
      bio,
      avatar_url,
    });

    return user;
  }
}

export default CreateUserService;
