import { AutoIncrement, Column, HasMany, Model, PrimaryKey, Table } from 'sequelize-typescript';
import { Post } from './post.entity';
import { Comments } from './Comments';

@Table({
  timestamps: false,
})
export class Profile extends Model<Profile> {

  @PrimaryKey
  @AutoIncrement
  @Column
  public id!: number;

  @Column
  public userName!: string;

  @Column
  public password!: string;

  @Column
  public email!: string;

  @Column
  public displayName!: string;

  @Column
  public description!: string;

  @Column
  public avatar!: string;

  @HasMany(() => Post)
  posts: Post[];

  @HasMany(() => Comments)
  comments: Comments[];

}
