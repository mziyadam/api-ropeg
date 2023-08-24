import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('API Ropeg')
    .setDescription('Jangan lupa memasukkan Authorization! Kalau error 404 saat tryout bisa run curl-nya di <a href="https://git-scm.com/downloads">gitbash</a>')
    .setVersion('2.0')
    .addBasicAuth()
    // .addTag('cats')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);
  
  await app.listen(3000);
}
bootstrap();
