import { ObjectID } from 'mongodb';

import ICreateTweetDTO from '@modules/tweets/dtos/ICreateTweetDTO';

import Tweet from '@modules/tweets/infra/typeorm/schemas/Tweet';
import ITweetRepository from '../ITweetsRepository';

class FakeTweetsRepository implements ITweetRepository {
  private tweets: Tweet[] = [];

  public async create(tweetData: ICreateTweetDTO): Promise<Tweet> {
    const tweet = new Tweet();

    Object.assign(tweet, { id: new ObjectID() }, tweetData);

    this.tweets.push(tweet);

    return tweet;
  }
}

export default FakeTweetsRepository;
