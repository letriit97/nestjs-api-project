import { INestApplication } from "@nestjs/common";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

export function SwaggerConfiguration(app: INestApplication) {
    const config = new DocumentBuilder()
        .addBearerAuth()
        .setTitle('System Manager API')
        .setDescription('Document API Swaggers')
        .setVersion('1.0.0')
        .addTag('System Manager')
        .build();
    SwaggerModule.setup('api', app, SwaggerModule.createDocument(app, config));
}