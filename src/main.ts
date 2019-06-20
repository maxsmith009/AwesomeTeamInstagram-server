import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

require('dotenv').config();

async function bootstrap() {

  /*const fs = require('fs');
  const keyFile  = fs.readFileSync(__dirname + '/../ssl/mydomain.com.key.pem');
  const certFile = fs.readFileSync(__dirname + '/../ssl/mydomain.com.crt.pem');*/

  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT);
}
bootstrap();
