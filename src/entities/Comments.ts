import { Table, Column, Model, PrimaryKey, AutoIncrement, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Comment } from '../interfaces';
import { Profile } from './profile.entity';
import { Post } from './post.entity';

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

  @ForeignKey(() => Profile)
  @Column
  profileId: number;

  @BelongsTo(() => Profile)
  profile: Profile;

  @ForeignKey(() => Post)
  @Column
  postId: number;

  @BelongsTo(() => Post)
  post: Post;

}
