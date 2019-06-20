import {Sequelize} from 'sequelize-typescript';
import { Post } from '../entities/post.entity';
import { Op } from 'sequelize';
import { Profile } from '../entities/profile.entity';
import { Comment } from '../entities/comment.entity';

require('dotenv').config();

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'postgres',
        operatorsAliases: Op,
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        storage: ':memory:',
        models: [__dirname + '/entities'],
      });
      sequelize.addModels([Profile, Post, Comment]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
