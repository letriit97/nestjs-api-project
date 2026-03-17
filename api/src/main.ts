import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { INestApplication } from '@nestjs/common';
import { SwaggerConfiguration } from './_core/configs/swagger.config';

declare const module: any;
async function bootstrap() {
  const app: INestApplication<any> = await NestFactory.create(AppModule, { cors: true });
  //#region ======= Bật CORS =======
  // app.enableCors();
  //#endregion

  if (process.env.NODE_ENV === 'development') {
    //#region ======= SWAGGER =======
    SwaggerConfiguration(app);
    //#endregion
  }

  //#region ======= Healthchecks (Terminus) =======

  //#endregion

  await app.listen(process.env.PORT ?? 3000);

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
