import { Module } from '@nestjs/common';
import { PostsController } from './controllers/posts/PostsController';
import { PostsService } from './services/posts/PostsService';
import { AuthModule } from './auth/auth.module';
import { CommentsService } from './services/comments/CommentsService';
import { ProfilesService } from './services/profiles/ProfilesService';
import { EmailService } from './services/emails/EmailService';


@Module({
  imports: [
    AuthModule,
  ],
  controllers: [
    PostsController,
  ],
  providers: [
    PostsService,
    CommentsService,
    ProfilesService,
    EmailService],
})
export class AppModule {
}
