import { Injectable } from '@nestjs/common';
import { Post } from '../../interfaces';

@Injectable()
export class PostsService {
  private readonly posts: Post[] = [];

  async getAllPosts(): Promise<Post[]> {
    return this.posts;
  }

}
