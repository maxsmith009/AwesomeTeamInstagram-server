import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { sequelize } from './database';

require('dotenv').config();

async function bootstrap() {
  await sequelize.sync({force: true});
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT);
}
bootstrap();
