import {
  Entity,
  ObjectID,
  ObjectIdColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('users')
class User {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  login: string;

  @Column()
  name: string;

  @Column()
  bio: string;

  @Column()
  avatar_url: string;

  @CreateDateColumn()
  create_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default User;
