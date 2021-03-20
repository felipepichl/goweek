import { ObjectID } from 'mongodb';
import { getMongoRepository, MongoRepository } from 'typeorm';

import User from '@modules/users/infra/typeorm/schema/User';
import IUsersRepository from '@modules/users/repositories/IUsersRepository';

import ICreateUserDTO from '@modules/users/dtos/ICreateUserDTO';

class UsersRepository implements IUsersRepository {
  private ormRepository: MongoRepository<User>;

  constructor() {
    this.ormRepository = getMongoRepository(User, 'mongo');
  }

  public async create({
    login,
    name,
    bio,
    avatar_url,
  }: ICreateUserDTO): Promise<User> {
    const user = this.ormRepository.create({ login, name, bio, avatar_url });

    await this.ormRepository.save(user);

    return user;
  }

  public async findById(user_id: ObjectID): Promise<User> {
    const user = this.ormRepository.findOne({ where: user_id });

    return user;
  }
}

export default UsersRepository;
