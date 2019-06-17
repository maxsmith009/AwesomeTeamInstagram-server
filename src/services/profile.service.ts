import { Inject, Injectable } from '@nestjs/common';
import { Profile } from '../entities/profile.entity';
import { CreatePrifileDto } from '../entities/dto/create-prifile.dto';

@Injectable()
export class ProfileService {
  constructor(
    @Inject('PROFILE_REPOSITORY') private readonly PROFILE_REPOSITORY: typeof Profile,
  ) {}

  async getAllProfile(): Promise<Profile[]> {
    return await this.PROFILE_REPOSITORY.findAll();
  }

  async createProfile(createProfileDto: CreatePrifileDto): Promise<Profile> {
    const newProfile = new Profile();
    newProfile.userName = createProfileDto.userName;
    newProfile.displayName = createProfileDto.displayName;
    newProfile.description = createProfileDto.description;
    newProfile.email = createProfileDto.email;
    newProfile.password = createProfileDto.password;
    newProfile.avatar = createProfileDto.avatar;

    return await newProfile.save();
  }
}
