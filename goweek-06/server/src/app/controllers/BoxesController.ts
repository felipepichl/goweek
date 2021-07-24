import { Request, Response } from 'express';

import { CreateBoxesServices } from '../services/Boxe/CreateBoxesServices';

class BoxesController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { title } = request.body;
    const user_id = request.user.id;

    const createBoxesServices = new CreateBoxesServices();

    const boxes = createBoxesServices.execute({
      title,
      user_id,
    });

    return response.json(boxes);
  }
}

export { BoxesController };
