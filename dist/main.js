"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const swaggerConfig = new swagger_1.DocumentBuilder()
        .setTitle('Tecopo API')
        .setDescription('Prueba técnica para Tecopo')
        .setVersion('1.0')
        .addBearerAuth()
        .build();
    const documentFactory = () => swagger_1.SwaggerModule.createDocument(app, swaggerConfig);
    swagger_1.SwaggerModule.setup('docs', app, documentFactory);
    app.useGlobalPipes(new common_1.ValidationPipe({
        transformOptions: {
            enableImplicitConversion: true
        }
    }));
    await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
//# sourceMappingURL=main.js.map