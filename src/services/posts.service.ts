import { Inject, Injectable } from '@nestjs/common';
import { Post } from '../entities/post.entity';
import { CreatePostDto } from '../entities/dto/create-post.dto';

@Injectable()
export class PostsService {
  constructor(
    @Inject('POST_REPOSITORY') private readonly POST_REPOSITORY: typeof Post,
    ) {}

  async getAllPosts(): Promise<Post[]> {
    return await this.POST_REPOSITORY.findAll<Post>();
  }

  async createPost(createPostDto: CreatePostDto): Promise<Post> {
    const newPost = new Post();
    newPost.imageUrl = createPostDto.imageUrl;
    newPost.profileId = createPostDto.profileId;
    return await newPost.save();
  }

}
