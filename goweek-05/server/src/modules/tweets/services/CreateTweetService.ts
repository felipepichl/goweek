import { ObjectID } from 'mongodb';
import { injectable, inject } from 'tsyringe';

import IUserRepository from '@modules/users/repositories/IUsersRepository';

import AppError from '@shared/errors/AppError';
import Tweet from '../infra/typeorm/schemas/Tweet';
import ITweetRepository from '../repositories/ITweetsRepository';

interface IRequest {
  user_id: string;
  content: string;
}

@injectable()
class CreateTweetService {
  constructor(
    @inject('TweetsRepository')
    private tweetsRepository: ITweetRepository,

    @inject('UsersRepository')
    private usersRepository: IUserRepository,
  ) {}

  public async execute({ user_id, content }: IRequest): Promise<Tweet> {
    const user = await this.usersRepository.findById(new ObjectID(user_id));

    if (!user) {
      throw new AppError('User do not exists', 404);
    }

    const tweet = await this.tweetsRepository.create({ user, content });

    return tweet;
  }
}

export default CreateTweetService;
