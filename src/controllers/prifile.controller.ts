import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProfileService } from '../services/profile.service';
import { CreatePrifileDto } from '../entities/dto/create-prifile.dto';

@Controller('profiles')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @Get()
  async getAllProfile() {
    return await this.profileService.getAllProfile();
  }

  @Post()
  async createProfile(@Body()createProfileDto: CreatePrifileDto) {
    await this.profileService.createProfile(createProfileDto);
  }

}
