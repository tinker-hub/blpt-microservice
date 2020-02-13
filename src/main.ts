import { NestFactory } from '@nestjs/core';
import { INestMicroservice } from '@nestjs/common';

import * as morgan from 'morgan';

require('dotenv').config();

import { AppModule } from './app.module';
import ConfigUtil from './shared/utils/config.util';
import { Transport } from '@nestjs/common/enums/transport.enum';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.TCP,
    options: {
      retryAttempts: ConfigUtil.get('micro.retryAttempts') || 5,
      retryDelay: ConfigUtil.get('micro.retryDelay') || 3000,
    }
  });

  configureApp(app);

  await app.listenAsync();
}

export function configureApp(app: INestMicroservice) {
  app.useLogger(morgan('dev'));
}

bootstrap();
