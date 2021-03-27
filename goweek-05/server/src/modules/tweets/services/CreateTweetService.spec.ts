import { ObjectID } from 'mongodb';
import AppError from '@shared/errors/AppError';

import FakeUserRepository from '@modules/users/repositories/fakes/FakeUsersRepository';

import FakeTweetRepository from '../repositories/fakes/FakeTweetsRepository';
import CreateTweetService from './CreateTweetService';

let fakeTweetRepository: FakeTweetRepository;
let fakeUserRepository: FakeUserRepository;

let createTweet: CreateTweetService;

describe('CreateTweet', () => {
  beforeEach(() => {
    fakeTweetRepository = new FakeTweetRepository();
    fakeUserRepository = new FakeUserRepository();

    createTweet = new CreateTweetService(
      fakeTweetRepository,
      fakeUserRepository,
    );
  });

  it('should be able to create a new tweet', async () => {
    const user = await fakeUserRepository.create({
      login: 'johndue',
      name: 'John Due',
      bio: 'John Due bio',
      avatar_url: 'http://example.com/avatar_url',
    });

    const tweet = await createTweet.execute({
      user_id: user.id,
      content: 'content',
    });

    expect(tweet).toHaveProperty('id');
  });

  it('should not be able to create a new tweet without user', async () => {
    await expect(
      createTweet.execute({
        user_id: new ObjectID(),
        content: 'content',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
