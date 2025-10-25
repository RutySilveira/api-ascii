import type { Application } from "express";
import swaggerUi from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export function setupSwagger(app: Application) {
  const specs = swaggerJSDoc({
    definition: {
      openapi: "3.0.0",
      info: {
        title: "Product API",
        version: "1.0.0",
        description: "API documentation for products",
      },
    },
    apis: [
      path.join(__dirname, "../routes/*.ts"),
      path.join(__dirname, "../controllers/*.ts"),
    ],
  });

  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));
}
