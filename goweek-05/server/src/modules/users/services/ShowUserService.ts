import { ObjectID } from 'mongodb';
import { injectable, inject } from 'tsyringe';

import User from '../infra/typeorm/schemas/User';
import IUsersRepository from '../repositories/IUsersRepository';

interface IRequest {
  user_id: ObjectID;
}

@injectable()
class CreateUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  public async execute({ user_id }: IRequest): Promise<User> {
    const user = await this.usersRepository.findById(user_id);

    return user;
  }
}

export default CreateUserService;
