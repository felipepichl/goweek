import { container } from 'tsyringe';

import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';

import ITweetRepository from '@modules/tweet/repositories/ITweetRepository';
import TweetRepository from '@modules/tweet/infra/typeorm/repositories/TweetRepository';

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);

container.registerSingleton<ITweetRepository>(
  'TweetsRepository',
  TweetRepository,
);
