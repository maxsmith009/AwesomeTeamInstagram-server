import { Table, Column, Model, PrimaryKey, AutoIncrement, ForeignKey, BelongsTo, HasMany } from 'sequelize-typescript';
import { Profile } from './profile.entity';
import { Comment } from './comment.entity';

@Table({
  timestamps: false,
})
export class Post extends Model<Post> {

  @PrimaryKey
  @AutoIncrement
  @Column
  public id!: number;

  @Column
  public imageUrl!: string;

  @ForeignKey(() => Profile)
  @Column
  profileId: number;

  @BelongsTo(() => Profile)
  profile: Profile;

  @HasMany(() => Comment)
  comments: Comment[];

}
