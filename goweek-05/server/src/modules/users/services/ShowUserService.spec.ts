import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import ShowUserService from './ShowUserService';

let fakeUsersRepository: FakeUsersRepository;

let showUserService: ShowUserService;

describe('ShowUser', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();

    showUserService = new ShowUserService(fakeUsersRepository);
  });

  it('should be able to show the user', async () => {
    const user = await fakeUsersRepository.create({
      login: 'johndue',
      name: 'John Due',
      bio: 'John Due bio',
      avatar_url: 'http://example.com/avatar_url',
    });

    const showUser = await showUserService.execute({
      user_id: user.id,
    });

    expect(showUser.login).toBe('johndue');
    expect(showUser.name).toBe('John Due');
  });
});
