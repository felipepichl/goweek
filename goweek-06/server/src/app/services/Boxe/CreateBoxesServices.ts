import { getCustomRepository, Repository } from 'typeorm';

import { Boxe } from '@entities/Boxe';
import { BoxesRepository } from 'app/repositories/BoxesRepository';

import { AppError } from 'app/error/AppError';

interface IRequest {
  title: string;
  user_id: string;
  file_id: string;
}

class CreateBoxesServices {
  private boxesRepository: Repository<Boxe>;

  constructor() {
    this.boxesRepository = getCustomRepository(BoxesRepository);
  }

  public async execute({ title, user_id, file_id }: IRequest): Promise<Boxe> {
    const boxeAllreadyExists = await this.boxesRepository.find({ title });

    if (boxeAllreadyExists) {
      throw new AppError('Boxes already exists');
    }

    const boxe = this.boxesRepository.create({
      title,
      user_id,
      file_id,
    });

    await this.boxesRepository.save(boxe);

    return boxe;
  }
}

export { CreateBoxesServices };
