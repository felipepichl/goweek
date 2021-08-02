import { Request, Response } from 'express';

import { ListBoxesServices } from '../../services/Boxe/ListBoxesServices';

class ListBoxesController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const user_id = request.user.id;

    const listBoxesServices = new ListBoxesServices();

    const boxes = await listBoxesServices.execute({
      user_id,
    });

    return response.json(boxes);
  }
}

export { ListBoxesController };
