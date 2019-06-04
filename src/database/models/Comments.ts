import { Table, Column, Model, PrimaryKey, AutoIncrement } from 'sequelize-typescript';
import { Comment } from '../../interfaces';

@Table({
  timestamps: false,
})
export class Comments extends Model<Comment> {

  @PrimaryKey
  @AutoIncrement
  @Column
  public id!: number;

  @Column
  public postId!: number;

  @Column
  public text!: string;

}
