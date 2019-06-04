import { AutoIncrement, Column, HasMany, Model, PrimaryKey, Table } from 'sequelize-typescript';
import { Profile } from '../../interfaces';
import { Posts } from './Posts';
import { Comments } from './Comments';


@Table({
  timestamps: false,
})
export class Profiles extends Model<Profile> {

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

  @HasMany(() => Posts)
  posts: Posts[];

  @HasMany(() => Comments)
  comments: Comments[];

}

