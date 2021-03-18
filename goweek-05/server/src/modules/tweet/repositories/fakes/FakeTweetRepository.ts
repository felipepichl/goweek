import { ObjectID } from 'mongodb';

import Tweet from '@modules/tweet/infra/typeorm/schema/Tweet';
import ITweetRepository from '../ITweetRepository';

class FakeTweetRepository implements ITweetRepository {
  private tweets: Tweet[] = [];

  public async create(content: string): Promise<Tweet> {
    const tweet = new Tweet();

    Object.assign(tweet, { id: new ObjectID() }, content);

    this.tweets.push(tweet);

    return tweet;
  }
}

export default FakeTweetRepository;
