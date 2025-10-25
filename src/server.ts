import express from "express";
import productRoutes from "./routes/product-routes.js";
import { errorHandler } from "./middlewares/error-handler.js";
import { setupSwagger } from "./configs/swagger.js";

const app = express();
const port = 3000;

app.use(express.json());
app.use(productRoutes);
app.use(errorHandler);

setupSwagger(app);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
