import { Request, Response } from 'express';

import { CreateBoxesServices } from '../../services/Boxe/CreateBoxesServices';

class CreateBoxesController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { title } = request.body;
    const user_id = request.user.id;

    const { filename: file } = request.file as Express.Multer.File;

    const createBoxesServices = new CreateBoxesServices();

    const boxes = createBoxesServices.execute({
      title,
      user_id,
      file,
    });

    return response.json(boxes);
  }
}

export { CreateBoxesController };
