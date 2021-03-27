import AppError from '@shared/errors/AppError';

import FakeGitHubProvider from '@modules/users/providers/GitHubProvider/fakes/FakeGitHubProvider';
import FakeJwtTokenProvider from '@modules/users/providers/JwtTokenProvider/fakes/FakeJwtTokenProvider';

import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import CreateUserService from './CreateUserService';

let fakeUsersRepository: FakeUsersRepository;
let fakeGitHubProvider: FakeGitHubProvider;
let fakeJwtTokenProvider: FakeJwtTokenProvider;

let createUser: CreateUserService;

describe('CreateUser', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    fakeGitHubProvider = new FakeGitHubProvider();
    fakeJwtTokenProvider = new FakeJwtTokenProvider();

    createUser = new CreateUserService(
      fakeUsersRepository,
      fakeGitHubProvider,
      fakeJwtTokenProvider,
    );
  });

  it('should be able to create a new user', async () => {
    const userGitHub = await createUser.execute({
      login: 'johndue',
    });

    expect(userGitHub.user).toHaveProperty('id');
  });

  it('should not be able to create a new user then nonexistent in GitHub', async () => {
    createUser = new CreateUserService(
      fakeUsersRepository,
      fakeGitHubProvider,
      fakeJwtTokenProvider,
    );

    await expect(
      createUser.execute({ login: 'nonexistent' }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to create a new user with same login from another', async () => {
    const userGitHub = await createUser.execute({
      login: 'johndue',
    });

    await createUser.execute({
      login: 'johndue',
    });

    const { name } = userGitHub.user;

    const userMongo = await fakeUsersRepository.findByName(name);

    expect(userMongo).toHaveProperty('id');
  });
});
