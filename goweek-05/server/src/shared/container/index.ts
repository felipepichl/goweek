import { container } from 'tsyringe';

import ITweetRepository from '@modules/tweet/repositories/ITweetRepository';
import TweetRepository from '@modules/tweet/infra/typeorm/repositories/TweetRepository';

container.registerSingleton<ITweetRepository>(
  'TweetRepository',
  TweetRepository,
);
