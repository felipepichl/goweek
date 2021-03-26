import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';
import IGutHubProvider from '../providers/GitHubProvider/models/IGitHubProvider';
import IJwtTokenProvider from '../providers/JwtTokenProvider/models/IJwtTokenProvider';

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

    @inject('JwtTokenProvider')
    private jwtTokenProvider: IJwtTokenProvider,
  ) {}

  public async execute({ login }: IRequest): Promise<IResponse> {
    const userGitHub = await this.gitHubProvider.findUser(login);

    if (!userGitHub) {
      throw new AppError('User do not found in GitHub', 401);
    }

    const { name, bio, avatar_url } = userGitHub;
    let token: string;

    const userMongo = await this.usersRepository.findByName(name);

    if (userMongo) {
      token = await this.jwtTokenProvider.tokenGenerate(String(userMongo.id));

      return { user: userMongo, token };
    }

    const user = await this.usersRepository.create({
      login,
      name,
      bio,
      avatar_url,
    });

    token = await this.jwtTokenProvider.tokenGenerate(String(user.id));

    return { user, token };
  }
}

export default CreateUserService;
