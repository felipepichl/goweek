import IUserGitHubDTO from '../dtos/IUserGitHubDTO';

interface IGitHubProvider {
  findUser(login: string): Promise<IUserGitHubDTO>;
}

export default IGitHubProvider;
