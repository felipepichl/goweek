import { ObjectID } from 'mongodb';
import { injectable, inject } from 'tsyringe';

import IUserRepository from '@modules/users/repositories/IUsersRepository';

import Tweet from '../infra/typeorm/schema/Tweet';
import ITweetRepository from '../repositories/ITweetsRepository';

interface IRequest {
  user_id: ObjectID;
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
    const user = await this.usersRepository.findById(user_id);

    const tweet = await this.tweetsRepository.create({ user, content });

    return tweet;
  }
}

export default CreateTweetService;
