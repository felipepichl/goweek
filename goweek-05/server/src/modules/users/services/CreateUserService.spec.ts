import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import CreateUserService from './CreateUserService';

let fakeUsersRepository: FakeUsersRepository;

let createUsers: CreateUserService;

describe('CreateUser', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();

    createUsers = new CreateUserService(fakeUsersRepository);
  });

  it('should be able to create a new user', async () => {
    const user = await createUsers.execute({
      login: 'johndue',
      name: 'John Due',
      bio: 'John Due bio',
      avatar_url: 'http://example.com/avatar_url',
    });

    expect(user).toHaveProperty('id');
  });
});
