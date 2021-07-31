import { Request, Response } from 'express';

import { CreateFilesServices } from 'app/services/File/CreateFilesServices';

class CreateFilesController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { title } = request.body;
    const { filename: path } = request.file as Express.Multer.File;

    const createFilesServices = new CreateFilesServices();

    const file = await createFilesServices.execute({
      title,
      path,
    });

    return response.json(file);
  }
}

export { CreateFilesController };
