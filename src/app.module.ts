import { Module } from '@nestjs/common';
import { PostsModule } from './modules/posts.module';
import { ProfileModule } from './modules/profile.module';

@Module({
  imports: [PostsModule, ProfileModule],
})
export class AppModule {
}
