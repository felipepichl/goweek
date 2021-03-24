import { getMongoRepository, MongoRepository } from 'typeorm';

import Tweet from '@modules/tweets/infra/typeorm/schemas/Tweet';
import ITweetRepository from '@modules/tweets/repositories/ITweetsRepository';

import ICreateTweetDTO from '@modules/tweets/dtos/ICreateTweetDTO';

class TweetsRepository implements ITweetRepository {
  private ormRepository: MongoRepository<Tweet>;

  constructor() {
    this.ormRepository = getMongoRepository(Tweet, 'mongo');
  }

  public async create({ user, content }: ICreateTweetDTO): Promise<Tweet> {
    const tweet = this.ormRepository.create({ user, content });

    console.log(tweet);

    // await this.ormRepository.save(tweet);

    return tweet;
  }
}

export default TweetsRepository;
