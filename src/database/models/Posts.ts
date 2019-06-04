import { Table, Column, Model, PrimaryKey, AutoIncrement, ForeignKey, BelongsTo, HasMany } from 'sequelize-typescript';
import { Post } from '../../interfaces';
import { Profiles } from './Profiles';
import { Comments } from './Comments';


@Table({
  timestamps: false,
})
export class Posts extends Model<Post> {

  @PrimaryKey
  @AutoIncrement
  @Column
  public id!: number;

  @Column
  public imageUrl!: string;

  @ForeignKey(() => Profiles)
  @Column
  profileId: number;

  @BelongsTo(() => Profiles)
  profile: Profiles;

  @HasMany(() => Comments)
  comments: Comments[];

}
