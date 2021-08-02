import { getCustomRepository, Repository } from 'typeorm';

import { Boxe } from '@entities/Boxe';
import { BoxesRepository } from 'app/repositories/BoxesRepository';

interface IRequest {
  user_id: string;
}

class ListBoxesServices {
  private boxesRepository: Repository<Boxe>;

  constructor() {
    this.boxesRepository = getCustomRepository(BoxesRepository);
  }

  public async execute({ user_id }: IRequest): Promise<Boxe[]> {
    const boxes = await this.boxesRepository.find({
      where: user_id,
    });

    return boxes;
  }
}

export { ListBoxesServices };
