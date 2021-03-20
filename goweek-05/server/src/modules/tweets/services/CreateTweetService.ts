import { ObjectID } from 'mongodb';
import { injectable, inject } from 'tsyringe';

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
  ) {}

  public async execute({ user_id, content }: IRequest): Promise<Tweet> {
    // const tweet = await this.tweetsRepository.create({ user_id, content });

    return null;
  }
}

export default CreateTweetService;
