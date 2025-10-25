import type { Request, Response, NextFunction } from "express";
import DeleteProductService from "../services/delete-product-service.js";

export default class DeleteProductController {
  async handle(req: Request, res: Response, next: NextFunction) {
    try {
      const productId = req.params.id as string;
      const isProductDeleted = await new DeleteProductService().execute(
        productId
      );
      if (!isProductDeleted) {
        return res.status(404).json({ message: "Product not found." });
      }
      return res.status(200).json({ message: "Product deleted successfully." });
    } catch (err: any) {
      next(err);
    }
  }
}
