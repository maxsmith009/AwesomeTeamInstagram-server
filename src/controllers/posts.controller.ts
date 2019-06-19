import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import {PostsService} from '../services/posts.service';
import { PostDto } from '../entities/dto/post.dto';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  async getAllPosts() {
    return await this.postsService.getAllPosts();
  }

  @Get(':id')
  async getPostById(@Param('id')id: number) {
    return await this.postsService.getPostById(id);
  }

  @Post()
  async createPost(@Body()postDto: PostDto) {
    await this.postsService.createPost(postDto);
  }

  @Put(':id')
  async updatePost(@Param('id')id: number, @Body()postDto: PostDto) {
    await this.postsService.updatePost(id, postDto);
  }

  @Delete(':id')
  async deletePost(@Param('id')id: number) {
    await this.postsService.deletePost(id);
  }

}
