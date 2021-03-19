import { ObjectID } from 'mongodb';

import ICreateTweetDTO from '@modules/tweet/dtos/ICreateTweetDTO';

import Tweet from '@modules/tweet/infra/typeorm/schema/Tweet';
import ITweetRepository from '../ITweetRepository';

class FakeTweetRepository implements ITweetRepository {
  private tweets: Tweet[] = [];

  public async create({ user, content }: ICreateTweetDTO): Promise<Tweet> {
    const tweet = new Tweet();

    Object.assign(tweet, { id: new ObjectID() }, user, content);

    this.tweets.push(tweet);

    return tweet;
  }
}

export default FakeTweetRepository;
