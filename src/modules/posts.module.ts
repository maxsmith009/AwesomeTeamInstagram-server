import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { PostsController } from '../controllers/posts.controller';
import { PostsService } from '../services/posts.service';
import { postsProviders } from '../providers/post.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [PostsController],
  providers: [PostsService, ...postsProviders],
})
export class PostsModule {}
