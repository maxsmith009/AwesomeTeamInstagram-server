import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { PostsController } from '../controllers/posts.controller';
import { PostsService } from '../services/posts.service';
import { postsProviders } from '../providers/post.providers';
import { CommentsService } from '../services/comments.service';
import { commentProviders } from '../providers/coment.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [PostsController],
  providers: [PostsService, ...postsProviders, CommentsService, ...commentProviders],
})
export class PostsModule {}
