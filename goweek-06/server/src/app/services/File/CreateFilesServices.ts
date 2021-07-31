import { getCustomRepository, Repository } from 'typeorm';

import { File } from '@entities/File';
import { FileRepository } from 'app/repositories/FileRepository';

interface IRequest {
  title: string;
  path: string;
}

class CreateFilesServices {
  private filesRepository: Repository<File>;

  constructor() {
    this.filesRepository = getCustomRepository(FileRepository);
  }

  public async execute({ title, path }: IRequest): Promise<File> {
    const file = this.filesRepository.create({
      title,
      path,
    });

    await this.filesRepository.save(file);

    return file;
  }
}

export { CreateFilesServices };
