import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateUserService from '@modules/users/services/CreateUserService';

class UsersController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { login } = request.body;

    const createUser = container.resolve(CreateUserService);

    const user = await createUser.execute({ login });

    return response.json(user);
  }
}

export default UsersController;
