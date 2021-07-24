import { EntityRepository, Repository } from 'typeorm';

import { Boxe } from '@entities/Boxe';

@EntityRepository(Boxe)
class BoxesRepository extends Repository<Boxe> {}

export { BoxesRepository };
