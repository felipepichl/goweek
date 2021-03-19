import { getMongoRepository, MongoRepository } from 'typeorm';

import Tweet from '@modules/tweet/infra/typeorm/schema/Tweet';
import ITweetRepository from '@modules/tweet/repositories/ITweetRepository';

import ICreateTweetDTO from '@modules/tweet/dtos/ICreateTweetDTO';

class FakeTweetRepository implements ITweetRepository {
  private ormRepository: MongoRepository<Tweet>;

  constructor() {
    this.ormRepository = getMongoRepository(Tweet, 'mongo');
  }

  public async create({ user_id, content }: ICreateTweetDTO): Promise<Tweet> {
    const tweet = this.ormRepository.create({ user_id, content });

    await this.ormRepository.save(tweet);

    return tweet;
  }
}

export default FakeTweetRepository;
