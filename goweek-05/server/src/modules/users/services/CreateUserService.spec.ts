import FakeGitHubProvider from '@modules/users/providers/GitHubProvider/fakes/FakeGitHubProvider';
import FakeJwtTokenProvider from '@modules/users/providers/JwtTokenProvider/fakes/FakeJwtTokenProvider';

import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import CreateUserService from './CreateUserService';

let fakeUsersRepository: FakeUsersRepository;
let fakeGitHubProvider: FakeGitHubProvider;
let fakeJwtTokenProvider: FakeJwtTokenProvider;

let createUsers: CreateUserService;

describe('CreateUser', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    fakeGitHubProvider = new FakeGitHubProvider();
    fakeJwtTokenProvider = new FakeJwtTokenProvider();

    createUsers = new CreateUserService(
      fakeUsersRepository,
      fakeGitHubProvider,
      fakeJwtTokenProvider,
    );
  });

  it('should be able to create a new user', async () => {
    const user = await createUsers.execute({
      login: 'johndue',
    });

    expect(user).toHaveProperty('id');
  });
});
