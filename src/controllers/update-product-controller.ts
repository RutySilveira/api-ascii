import type { Request, Response, NextFunction } from "express";
import UpdateProductService from "../services/update-product-service.js";
import type { UpdateProductDTO } from "../dtos/update-product-dto.js";
import type { ProductResponseDTO } from "../dtos/product-response-dto.js";

export default class UpdateProductController {
  async handle(req: Request, res: Response, next: NextFunction) {
    try {
      const product_id = req.params.id as string;
      const updateProductDTO: UpdateProductDTO = req.body;
      const updateProductService = new UpdateProductService();
      const product: ProductResponseDTO = await updateProductService.execute(
        product_id,
        updateProductDTO
      );
      return res.status(200).json(product);
    } catch (err: any) {
      next(err);
    }
  }
}
