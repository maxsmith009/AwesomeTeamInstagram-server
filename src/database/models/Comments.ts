import { Table, Column, Model, PrimaryKey, AutoIncrement, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Comment } from '../../interfaces';
import { Profiles } from './Profiles';
import { Posts } from './Posts';

@Table({
  timestamps: false,
})
export class Comments extends Model<Comment> {

  @PrimaryKey
  @AutoIncrement
  @Column
  public id!: number;

  @Column
  public text!: string;

  @ForeignKey(() => Profiles)
  @Column
  profileId: number;

  @BelongsTo(() => Profiles)
  profile: Profiles;

  @ForeignKey(() => Posts)
  @Column
  postId: number;

  @BelongsTo(() => Posts)
  post: Posts;

}
