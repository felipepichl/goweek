import { Request, Response } from 'express';

import { ListBoxesServices } from '../../services/Boxe/ListBoxesServices';

class ListBoxesController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const listBoxesServices = new ListBoxesServices();

    const boxes = await listBoxesServices.execute();

    return response.json(boxes);
  }
}

export { ListBoxesController };
