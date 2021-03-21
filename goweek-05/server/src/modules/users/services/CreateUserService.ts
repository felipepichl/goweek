import api from 'services/api';
import { injectable, inject } from 'tsyringe';

// import AppError from '@shared/errors/AppError';

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
  ) {}

  public async execute({ login }: IRequest): Promise<User> {
    const apiResponse = await api.get(`/${login}`);

    const { name, bio, avatar_url } = apiResponse.data;

    // if (!apiResponse.data) {
    //   throw new AppError('Incorrect email/password combination', 401);
    // }

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
