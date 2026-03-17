"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SwaggerConfiguration = SwaggerConfiguration;
const swagger_1 = require("@nestjs/swagger");
function SwaggerConfiguration(app) {
    const config = new swagger_1.DocumentBuilder()
        .addBearerAuth()
        .setTitle('System Manager API')
        .setDescription('Document API Swaggers')
        .setVersion('1.0.0')
        .addTag('System Manager')
        .build();
    swagger_1.SwaggerModule.setup('api', app, swagger_1.SwaggerModule.createDocument(app, config));
}
//# sourceMappingURL=swagger.config.js.map