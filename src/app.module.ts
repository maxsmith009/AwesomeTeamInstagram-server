import { Module } from '@nestjs/common';
import { PostsController } from './controllers/posts/PostsController';
import { PostsService } from './services/posts/PostsService';


@Module({
  imports: [],
  controllers: [PostsController],
  providers: [PostsService],
})
export class AppModule {}
