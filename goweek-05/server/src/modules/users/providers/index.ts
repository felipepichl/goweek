import { container } from 'tsyringe';

import IGitHubProvider from './GitHubProvider/models/IGitHubProvider';
import GitHubProvider from './GitHubProvider/implementations/GitHubProvider';

container.registerSingleton<IGitHubProvider>('GitHubProvider', GitHubProvider);
