import api from 'services/api';
import { injectable, inject } from 'tsyringe';

import User from '../infra/typeorm/schema/User';
import IUsersRepository from '../repositories/IUsersRepository';

interface IRequest {
  login: string;
  name: string;
  bio: string;
  avatar_url: string;
}

@injectable()
class CreateUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  public async execute({
    login,
    name,
    bio,
    avatar_url,
  }: IRequest): Promise<User> {
    const apiResponse = await api.get(`/${login}`);

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
