import type { Application } from "express";
import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";

export function setupSwagger(app: Application) {
  const specs = swaggerJsdoc({
    definition: {
      openapi: "3.0.0",
      info: {
        title: "Product API",
        version: "1.0.0",
        description: "API documentation for products",
      },
      servers: [
        {
          url: "http://localhost:3000",
          description: "Local Server",
        },
      ],
    },
    apis: ["./src/routes/*.ts"],
  });

  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));
}
