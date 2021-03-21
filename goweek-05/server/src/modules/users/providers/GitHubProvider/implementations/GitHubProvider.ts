import api from 'services/api';

import IUserGitHubDTO from '../dtos/IUserGitHubDTO';
import IGitHubProvider from '../models/IGitHubProvider';

class FakeGitHubProvider implements IGitHubProvider {
  public async findUser(login: string): Promise<IUserGitHubDTO> {
    const apiResponse = await api.get(`/${login}`);

    const findUser = apiResponse.data;

    return findUser;
  }
}

export default FakeGitHubProvider;
