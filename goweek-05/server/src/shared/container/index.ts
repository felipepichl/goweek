import { container } from 'tsyringe';

import '@modules/users/providers';

import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';

import ITweetRepository from '@modules/tweets/repositories/ITweetsRepository';
import TweetRepository from '@modules/tweets/infra/typeorm/repositories/TweetsRepository';

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);

container.registerSingleton<ITweetRepository>(
  'TweetsRepository',
  TweetRepository,
);
