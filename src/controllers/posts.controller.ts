import { Body, Controller, Get, Post } from '@nestjs/common';
import {PostsService} from '../services/posts.service';
import { CreatePostDto } from '../entities/dto/create-post.dto';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  async getAllPosts() {
    return await this.postsService.getAllPosts();
  }

  @Post()
  async createPost(@Body()createPostDto: CreatePostDto) {
    await this.postsService.createPost(createPostDto);
  }

}
