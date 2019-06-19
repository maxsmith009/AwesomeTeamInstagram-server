import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { ProfileService } from '../services/profile.service';
import { profileProviders } from '../providers/profile.providers';
import { ProfileController } from '../controllers/profile.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [ProfileController],
  providers: [ProfileService, ...profileProviders],
})
export class ProfileModule {}
