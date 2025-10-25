import type { Request, Response, NextFunction } from "express";
import ListProductService from "../services/list-product-service.js";
import type { ProductResponseDTO } from "../dtos/product-response-dto.js";

export default class ListProductController {
  async handle(req: Request, res: Response, next: NextFunction) {
    try {
      const listProductService = new ListProductService();
      const products: ProductResponseDTO[] = await listProductService.execute();
      return res.status(200).json(products);
    } catch (err: any) {
      next(err);
    }
  }
}
