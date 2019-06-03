import { Controller, Get, Req } from '@nestjs/common';
import {PostsService} from '../../services/posts/PostsService';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  async getAllPosts () {
    return await this.postsService.getAllPosts();
  }

}
