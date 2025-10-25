import type { Request, Response, NextFunction } from "express";
import GetProductService from "../services/get-product-service.js";
import type { ProductResponseDTO } from "../dtos/product-response-dto.js";

export default class GetProductController {
  async handle(req: Request, res: Response, next: NextFunction) {
    try {
      const productId = req.params.id as string;
      const getProductService = new GetProductService();
      const product: ProductResponseDTO = await getProductService.execute(
        productId
      );

      if (!product) {
        return res.status(404).json({ message: "Product not found." });
      }

      return res.status(200).json(product);
    } catch (err: any) {
      next(err);
    }
  }
}
