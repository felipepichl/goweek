import {
  Entity,
  Column,
  PrimaryColumn,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
  ManyToOne,
} from 'typeorm';

import { v4 as uuid } from 'uuid';

import { User } from './User';
import { File } from './File';

@Entity('boxes')
class Boxe {
  @PrimaryColumn()
  id: string;

  @Column()
  title: string;

  @Column()
  user_id: string;

  @JoinColumn({ name: 'user_id' })
  @ManyToOne(() => User)
  user: User;

  @Column()
  file_id: string;

  @JoinColumn({ name: 'file_id' })
  @ManyToOne(() => File)
  file: File;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { Boxe };
