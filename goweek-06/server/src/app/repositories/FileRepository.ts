import { EntityRepository, Repository } from 'typeorm';

import { File } from '@entities/File';

EntityRepository(File);
class FileRepository extends Repository<File> {}

export { FileRepository };
