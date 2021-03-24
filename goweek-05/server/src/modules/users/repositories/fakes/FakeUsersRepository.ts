import { ObjectID } from 'mongodb';

import ICreateUserDTO from '@modules/users/dtos/ICreateUserDTO';

import User from '@modules/users/infra/typeorm/schemas/User';
import IUsersRepository from '../IUsersRepository';

class FakeUsersRepository implements IUsersRepository {
  private users: User[] = [];

  public async create(userData: ICreateUserDTO): Promise<User> {
    const user = new User();

    Object.assign(user, { id: new ObjectID() }, userData);

    this.users.push(user);

    return user;
  }

  public async findById(user_id: ObjectID): Promise<User> {
    const user = this.users.find(findUser => findUser.id === user_id);

    return user;
  }

  public async findByName(name: string): Promise<User> {
    const user = this.users.find(findUser => findUser.name === name);

    return user;
  }
}

export default FakeUsersRepository;
