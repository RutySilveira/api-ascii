import type { Request, Response, NextFunction } from "express";
import CreateProductService from "../services/create-product-service.js";
import type { CreateProductDTO } from "../dtos/create-product-dto.js";
import type { ProductResponseDTO } from "../dtos/product-response-dto.js";

export default class CreateProductController {
  async handle(req: Request, res: Response, next: NextFunction) {
    try {
      const createProductDTO: CreateProductDTO = req.body;
      const createProductService = new CreateProductService();
      const product: ProductResponseDTO = await createProductService.execute(
        createProductDTO
      );
      return res.status(201).json(product);
    } catch (err: any) {
      next(err);
    }
  }
}
