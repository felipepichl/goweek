import {
  Entity,
  ObjectID,
  ObjectIdColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

import User from '@modules/users/infra/typeorm/schemas/User';

@Entity('tweets')
class Tweet {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  content: string;

  @Column(type => User)
  likes: User[];

  @Column(type => User)
  user: User;

  @CreateDateColumn()
  create_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Tweet;
