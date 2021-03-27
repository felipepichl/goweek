import IUserGitHubDTO from '../dtos/IUserGitHubDTO';
import IGitHubProvider from '../models/IGitHubProvider';

class FakeGitHubProvider implements IGitHubProvider {
  private users: IUserGitHubDTO[] = [];

  public async findUser(login: string): Promise<IUserGitHubDTO> {
    const userGitHubFake = {
      login: 'johndue',
      name: 'John Due',
      bio: 'Fake bio',
      avatar_url: 'http://example.com',
    };

    this.users.push(userGitHubFake);

    const findUser = this.users.find(user => user.login === login);

    return findUser;
  }
}

export default FakeGitHubProvider;
