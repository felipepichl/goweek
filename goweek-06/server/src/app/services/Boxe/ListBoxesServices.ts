import { getCustomRepository, Repository } from 'typeorm';

import { Boxe } from '@entities/Boxe';
import { BoxesRepository } from 'app/repositories/BoxesRepository';

class ListBoxesServices {
  private boxesRepository: Repository<Boxe>;

  constructor() {
    this.boxesRepository = getCustomRepository(BoxesRepository);
  }

  public async execute(): Promise<Boxe[]> {
    const boxes = await this.boxesRepository.find();

    return boxes;
  }
}

export { ListBoxesServices };
