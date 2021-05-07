import { ObjectID } from 'mongodb';
import { getMongoRepository, MongoRepository } from 'typeorm';

import User from '@modules/users/infra/typeorm/schemas/User';
import IUsersRepository from '@modules/users/repositories/IUsersRepository';

import ICreateUserDTO from '@modules/users/dtos/ICreateUserDTO';

class UsersRepository implements IUsersRepository {
  private ormRepository: MongoRepository<User>;

  constructor() {
    this.ormRepository = getMongoRepository(User);
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
    const user = await this.ormRepository.findOne({ where: user_id });

    return user;
  }

  public async findByName(name: string): Promise<User> {
    const user = await this.ormRepository.findOne({ where: name });

    return user;
  }
}

export default UsersRepository;
