import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

declare const module: any;
async function bootstrap() {
  const app: INestApplication<any> = await NestFactory.create(AppModule, { cors: true });
  //#region ======= Bật CORS =======
  // app.enableCors();
  //#endregion

  //#region ======= SWAGGER =======
  const config = new DocumentBuilder()
    .addBearerAuth()
    .setTitle('System Manager API')
    .setDescription('Document API Swaggers')
    .setVersion('1.0.0')
    .addTag('System Manager')
    .build();
  SwaggerModule.setup('api', app, SwaggerModule.createDocument(app, config));
  //#endregion

  //#region ======= Healthchecks (Terminus) =======

  //#endregion

  await app.listen(process.env.PORT ?? 3000);

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
