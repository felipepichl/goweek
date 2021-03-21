import { ObjectID } from 'mongodb';

import ICreateUserDTO from '../dtos/ICreateUserDTO';
import User from '../infra/typeorm/schemas/User';

interface IUsersRepository {
  create(data: ICreateUserDTO): Promise<User>;
  findById(user_id: ObjectID): Promise<User>;
}

export default IUsersRepository;
