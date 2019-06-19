import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import { sequelize } from './database';

require('dotenv').config();

async function bootstrap() {

  /*const fs = require('fs');
  const keyFile  = fs.readFileSync(__dirname + '/../ssl/mydomain.com.key.pem');
  const certFile = fs.readFileSync(__dirname + '/../ssl/mydomain.com.crt.pem');*/

  // await sequelize.sync({force: true});
  const app = await NestFactory.create(AppModule);
  /*const app = await NestFactory.create(AppModule, {
    httpsOptions: {
      key: keyFile,
      cert: certFile,
    }});*/
  await app.listen(process.env.PORT);
}
bootstrap();
