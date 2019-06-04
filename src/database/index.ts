import {Sequelize} from 'sequelize-typescript';
import { Posts } from './models/Posts';
import { Op } from 'sequelize';
import { Profiles } from './models/Profiles';
import { Comments } from './models/Comments';

require('dotenv').config();

export const sequelize = new Sequelize({
  dialect: 'postgres',
  operatorsAliases: Op,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  storage: ':memory:',
  models: [__dirname + '/models']
});

sequelize.addModels([Profiles]);
sequelize.addModels([Posts]);
sequelize.addModels([Comments]);
