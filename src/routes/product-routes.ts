import { Router } from "express";
import CreateProductController from "../controllers/create-product-controller.js";
import GetProductController from "../controllers/get-product-controller.js";
import UpdateProductController from "../controllers/update-product-controller.js";
import DeleteProductController from "../controllers/delete-product-controller.js";
import ListProductController from "../controllers/list-product-controller.js";

const router = Router();

/**
 * @openapi
 * /products:
 *   post:
 *     summary: Create a new product
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               price:
 *                 type: number
 *               category:
 *                 type: string
 *     responses:
 *       201:
 *         description: Product created successfully
 */
router.post("/products", (req, res, next) =>
  new CreateProductController().handle(req, res, next)
);

/**
 * @openapi
 * /products/{id}:
 *   get:
 *     summary: Get product by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Product found
 *       404:
 *         description: Product not found
 */
router.get("/products/:id", (req, res, next) =>
  new GetProductController().handle(req, res, next)
);

/**
 * @openapi
 * /products/{id}:
 *   put:
 *     summary: Update product by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               price:
 *                 type: number
 *               category:
 *                 type: string
 *     responses:
 *       200:
 *         description: Product updated successfully
 *       404:
 *         description: Product not found
 */
router.put("/products/:id", (req, res, next) =>
  new UpdateProductController().handle(req, res, next)
);

/**
 * @openapi
 * /products/{id}:
 *   delete:
 *     summary: Delete product by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Product deleted successfully
 *       404:
 *         description: Product not found
 */
router.delete("/products/:id", (req, res, next) =>
  new DeleteProductController().handle(req, res, next)
);

router.get("/products", (req, res, next) =>
  new ListProductController().handle(req, res, next)
);

export default router;
