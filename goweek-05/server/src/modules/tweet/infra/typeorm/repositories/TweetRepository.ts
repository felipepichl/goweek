import { getMongoRepository, MongoRepository } from 'typeorm';

import Tweet from '@modules/tweet/infra/typeorm/schema/Tweet';
import ITweetRepository from '@modules/tweet/repositories/ITweetRepository';

class FakeTweetRepository implements ITweetRepository {
  private ormRepository: MongoRepository<Tweet>;

  constructor() {
    this.ormRepository = getMongoRepository(Tweet, 'mongo');
  }

  public async create(content: string): Promise<Tweet> {}
}

export default FakeTweetRepository;
