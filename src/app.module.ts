import { Module } from '@nestjs/common';
import { PostsController } from './controllers/posts/PostsController';
import { PostsService } from './services/posts/PostsService';
import { AuthModule } from './auth/auth.module';


@Module({
  imports: [AuthModule],
  controllers: [PostsController],
  providers: [PostsService],
})
export class AppModule {}
