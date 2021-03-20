import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateUserService from '@modules/users/services/CreateUserService';

class UsersController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { login, name, bio, avatar_url } = request.body;

    const createUser = container.resolve(CreateUserService);

    const user = await createUser.execute({
      login,
      name,
      bio,
      avatar_url,
    });

    return response.json(user);
  }
}

export default UsersController;
