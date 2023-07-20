import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configDocumentSwagger = new DocumentBuilder()
  .setTitle("Documentação - Swagger")
  .setDescription("Documentação da API")
  .setVersion("1.0.0")
  .addTag("car")
  .build();

  const document = SwaggerModule.createDocument(app, configDocumentSwagger);
  SwaggerModule.setup("api", app, document);

  await app.listen(3000);
}
bootstrap();
