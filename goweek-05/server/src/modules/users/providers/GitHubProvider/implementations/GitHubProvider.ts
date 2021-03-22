import api from 'services/api';

import AppError from '@shared/errors/AppError';

import IUserGitHubDTO from '../dtos/IUserGitHubDTO';
import IGitHubProvider from '../models/IGitHubProvider';

class FakeGitHubProvider implements IGitHubProvider {
  public async findUser(login: string): Promise<IUserGitHubDTO> {
    const apiResponse = await api.get(`/${login}`);

    if (apiResponse.status === 404) {
      throw new AppError('Incorrect GitHub username', 401);
    }
    const findUser = apiResponse.data;

    return findUser;
  }
}

export default FakeGitHubProvider;
