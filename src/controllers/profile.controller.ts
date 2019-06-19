import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ProfileService } from '../services/profile.service';
import { ProfileDto } from '../entities/dto/profile.dto';

@Controller('profiles')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @Get()
  async getAllProfile() {
    return await this.profileService.getAllProfile();
  }

  @Get(':id')
  async getProfileById(@Param('id')id: number) {
    return await this.profileService.getProfileById(id);
  }

  @Post()
  async createProfile(@Body()profileDto: ProfileDto) {
    await this.profileService.createProfile(profileDto);
  }

  @Put(':id')
  async updateProfile(@Param('id')id: number, @Body()profileDto: ProfileDto) {
    await this.profileService.updateProfile(id, profileDto);
  }

  @Delete(':id')
  async deleteProfile(@Param('id')id: number) {
    await this.profileService.deleteProfile(id);
  }

}
