import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import {PostsService} from '../services/posts.service';
import { PostDto } from '../entities/dto/post.dto';
import { CommentsService } from '../services/comments.service';
import { CommentDto } from '../entities/dto/comment.dto';

@Controller('posts')
export class PostsController {
  constructor(
    private readonly postsService: PostsService,
    private readonly commentsService: CommentsService,
  ) {}

  @Get()
  async getAllPosts() {
    return await this.postsService.getAllPosts();
  }

  @Get(':postId')
  async getPostById(@Param('postId')postId: number) {
    return await this.postsService.getPostById(postId);
  }

  @Post()
  async createPost(@Body()postDto: PostDto) {
    return await this.postsService.createPost(postDto);
  }

  @Put(':postId')
  async updatePost(@Param('postId')postId: number, @Body()postDto: PostDto) {
    return await this.postsService.updatePost(postId, postDto);
  }

  @Delete(':postId')
  async deletePost(@Param('postId')postId: number) {
    await this.commentsService.deleteCommentsOfPost(postId)
      .then(() => this.postsService.deletePost(postId));
  }

  @Get(':postId/comments')
  async getCommentsByPostId(@Param('postId')postId: number) {
    return await this.commentsService.getCommentsByPostId(postId);
  }

  @Post(':postId/comments')
  async createComment(@Param('postId')postId: number, @Body()commentDto: CommentDto) {
    return await this.commentsService.createComment(postId, commentDto);
  }

  @Delete('comments/:commentId')
  async deleteComment(@Param('commentId')commentId: number) {
    await this.commentsService.deleteComment(commentId);
  }
}
