import 'reflect-metadata';

import { NestFactory } from '@nestjs/core';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { AppModule } from './modules/app.module.js';

async function bootstrap(): Promise<void> {
  const application = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );

  const swaggerConfiguration = new DocumentBuilder()
    .setTitle('Osmodian Arena API')
    .setDescription('Backend-first API for the Osmodian Arena MVP.')
    .setVersion('0.1.0')
    .build();

  const swaggerDocument = SwaggerModule.createDocument(application, swaggerConfiguration);
  SwaggerModule.setup('docs', application, swaggerDocument);

  await application.listen(3000, '0.0.0.0');
}

void bootstrap();
