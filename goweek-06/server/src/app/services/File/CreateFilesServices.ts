import { getCustomRepository, Repository } from 'typeorm';

import { File } from '@entities/File';
import { FileRepository } from 'app/repositories/FileRepository';

import { Boxe } from '@entities/Boxe';
import { BoxesRepository } from 'app/repositories/BoxesRepository';

interface IRequest {
  title: string;
  path: string;
  box_id: string;
}

class CreateFilesServices {
  private filesRepository: Repository<File>;

  private boxesRepository: Repository<Boxe>;

  constructor() {
    this.filesRepository = getCustomRepository(FileRepository);
    this.boxesRepository = getCustomRepository(BoxesRepository);
  }

  public async execute({ title, path, box_id }: IRequest): Promise<File> {
    const file = this.filesRepository.create({
      title,
      path,
    });

    await this.filesRepository.save(file);

    const boxe = await this.boxesRepository.findOne({
      where: { id: box_id },
    });

    boxe.file_id = file.id;

    this.boxesRepository.save(boxe);

    return file;
  }
}

export { CreateFilesServices };
