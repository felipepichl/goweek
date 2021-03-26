import { container } from 'tsyringe';

import IGitHubProvider from './GitHubProvider/models/IGitHubProvider';
import GitHubProvider from './GitHubProvider/implementations/GitHubProvider';

import IJwtTokenProvider from './JwtTokenProvider/models/IJwtTokenProvider';
import JwtTokenProvider from './JwtTokenProvider/implementations/JwtTokenProvider';

container.registerSingleton<IGitHubProvider>('GitHubProvider', GitHubProvider);

container.registerSingleton<IJwtTokenProvider>(
  'JwtTokenProvider',
  JwtTokenProvider,
);
