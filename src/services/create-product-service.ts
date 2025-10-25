import { prismaClient } from "../prisma/index.js";
import type { CreateProductDTO } from "../dtos/create-product-dto.js";

export default class CreateProductService {
  async execute({ name, price, category }: CreateProductDTO) {
    try {
      const product = await prismaClient.product.create({
        data: { name, price, category },
        select: {
          id: true,
          name: true,
          price: true,
          category: true,
          created_at: true,
          updated_at: true,
        },
      });

      return product;
    } catch (err: any) {
      throw new Error("Could not create the product.");
    }
  }
}
