import { Inject, Injectable } from '@nestjs/common';
import { Post } from '../entities/post.entity';
import { PostDto } from '../entities/dto/post.dto';

@Injectable()
export class PostsService {
  constructor(
    @Inject('POST_REPOSITORY') private readonly POST_REPOSITORY: typeof Post,
    ) {}

  async getAllPosts(): Promise<Post[]> {
    return await this.POST_REPOSITORY.findAll<Post>();
  }

  async getPostById(postId: number): Promise<Post> {
    return await this.POST_REPOSITORY.findByPk(postId);
  }

  async createPost(postDto: PostDto): Promise<Post> {
    const newPost = new Post();
    newPost.imageUrl = postDto.imageUrl;
    newPost.profileId = postDto.profileId;
    return await newPost.save();
  }

  async updatePost(postId: number, postDto: PostDto): Promise<Post> {
    return await this.POST_REPOSITORY.update(postDto, {
      where: {
        id: postId,
      },
    });
  }

  async deletePost(postId: number) {
    return await this.POST_REPOSITORY.destroy({
      where: {
        id: postId,
      },
    });
  }

  async getPostsByProfileId(idOfProfile: number): Promise<Post[]> {
    return await this.POST_REPOSITORY.findAll({
      where: {
        profileId: idOfProfile,
      },
    });
  }

}
