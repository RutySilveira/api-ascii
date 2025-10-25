import { Router } from "express";
import CreateProductController from "../controllers/create-product-controller.js";
import GetProductController from "../controllers/get-product-controller.js";
import UpdateProductController from "../controllers/update-product-controller.js";
import DeleteProductController from "../controllers/delete-product-controller.js";
import ListProductController from "../controllers/list-product-controller.js";
import { validateSchema } from "../middlewares/validate-schema.js";
import { createProductSchema } from "../dtos/create-product-dto.js";
import { updateProductSchema } from "../dtos/update-product-dto.js";

const router = Router();

const listProductController = new ListProductController();
const createProductController = new CreateProductController();
const getProductController = new GetProductController();
const updateProductController = new UpdateProductController();
const deleteProductController = new DeleteProductController();

/**
 * @swagger
 * components:
 *   schemas:
 *     ProductInput:
 *       type: object
 *       required:
 *         - name
 *         - price
 *         - category
 *       properties:
 *         name:
 *           type: string
 *           example: Smart TV 4K
 *         price:
 *           type: number
 *           format: float
 *           description: Must be greater than zero
 *           example: 1250.50
 *         category:
 *           type: string
 *           example: Electronics
 */

/**
 * @swagger
 * tags:
 *   - name: Products
 *     description: Product management
 */

/**
 * @swagger
 * /products:
 *   get:
 *     summary: List all products
 *     tags: [Products]
 *     responses:
 *       200:
 *         description: Product list returned successfully
 *   post:
 *     summary: Create a new product
 *     tags: [Products]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ProductInput'
 *     responses:
 *       201:
 *         description: Product created successfully
 */
router
  .route("/products")
  .get(listProductController.handle.bind(listProductController))
  .post(
    validateSchema(createProductSchema),
    createProductController.handle.bind(createProductController)
  );

/**
 * @swagger
 * /products/{id}:
 *   parameters:
 *     - in: path
 *       name: id
 *       required: true
 *       schema:
 *         type: string
 *       description: Product ID
 *   get:
 *     summary: Get a product by ID
 *     tags: [Products]
 *     responses:
 *       200:
 *         description: Product found
 *       404:
 *         description: Product not found
 *   put:
 *     summary: Update a product by ID
 *     tags: [Products]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ProductInput'
 *     responses:
 *       200:
 *         description: Product updated successfully
 *       404:
 *         description: Product not found
 *   delete:
 *     summary: Delete a product by ID
 *     tags: [Products]
 *     responses:
 *       200:
 *         description: Product deleted successfully
 *       404:
 *         description: Product not found
 */
router
  .route("/products/:id")
  .get(getProductController.handle.bind(getProductController))
  .delete(deleteProductController.handle.bind(deleteProductController))
  .put(
    validateSchema(updateProductSchema),
    updateProductController.handle.bind(updateProductController)
  );

export default router;
