import { ObjectID } from 'mongodb';

import FakeTweetRepository from '../repositories/fakes/FakeTweetRepository';
import CreateTweetService from './CreateTweetService';

let fakeTweetRepository: FakeTweetRepository;

let createTweet: CreateTweetService;

describe('CreateTweet', () => {
  beforeEach(() => {
    fakeTweetRepository = new FakeTweetRepository();

    createTweet = new CreateTweetService(fakeTweetRepository);
  });

  it('should be able to create a new tweet', async () => {
    const tweet = await createTweet.execute({
      user_id: new ObjectID(),
      content: 'content',
    });

    expect(tweet).toHaveProperty('id');
  });
});
