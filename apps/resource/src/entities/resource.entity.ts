import { BaseEntity, Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';
import { Author } from './author.entity';

export interface IResource {
  id: ObjectID;
  description: string;
  name: string;
  author: Author;
}

@Entity()
export class Resource extends BaseEntity {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  description: string;

  @Column()
  name: string;

  @Column(() => Author)
  author: Author;
}
