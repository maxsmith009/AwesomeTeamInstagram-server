import { Table, Column, Model, PrimaryKey, AutoIncrement } from 'sequelize-typescript';
import { Post } from '../../interfaces';


@Table({
  timestamps: false,
})
export class Posts extends Model<Post> {

  @PrimaryKey
  @AutoIncrement
  @Column
  public id!: number;

  @Column
  public profileId!: number;

  @Column
  public imageUrl!: string;

}
