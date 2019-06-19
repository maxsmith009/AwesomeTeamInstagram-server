import { Inject, Injectable } from '@nestjs/common';
import { Profile } from '../entities/profile.entity';
import { ProfileDto } from '../entities/dto/profile.dto';

@Injectable()
export class ProfileService {
  constructor(
    @Inject('PROFILE_REPOSITORY') private readonly PROFILE_REPOSITORY: typeof Profile,
  ) {}

  async getAllProfile(): Promise<Profile[]> {
    return await this.PROFILE_REPOSITORY.findAll();
  }

  async getProfileById(profileId: number): Promise<Profile> {
    return await this.PROFILE_REPOSITORY.findByPk(profileId);
  }

  async createProfile(profileDto: ProfileDto): Promise<Profile> {
    const newProfile = new Profile();
    newProfile.userName = profileDto.userName;
    newProfile.displayName = profileDto.displayName;
    newProfile.description = profileDto.description;
    newProfile.email = profileDto.email;
    newProfile.password = profileDto.password;
    newProfile.avatar = profileDto.avatar;

    return await newProfile.save();
  }

  async updateProfile(profileId: number, profileDto: ProfileDto): Promise<Profile> {
    return await this.PROFILE_REPOSITORY.update(profileDto, {
      where: {
        id: profileId,
      },
    });
  }

  async deleteProfile(profileId): Promise<Profile> {
    return await this.PROFILE_REPOSITORY.destroy({
      where: {
        id: profileId,
      },
    });
  }
}
