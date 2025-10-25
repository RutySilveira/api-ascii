import { prismaClient } from "../prisma/index.js";
import type { UpdateProductDTO } from "../dtos/update-product-dto.js";

export default class UpdateProductService {
  async execute(id: string, productDTO: UpdateProductDTO) {
    try {
      const updatedProduct = await prismaClient.product.update({
        where: { id },
        data: {
          ...(productDTO.name !== undefined && { name: productDTO.name }),
          ...(productDTO.price !== undefined && { price: productDTO.price }),
          ...(productDTO.category !== undefined && {
            category: productDTO.category,
          }),
          updated_at: new Date(),
        },
        select: {
          id: true,
          name: true,
          price: true,
          category: true,
          created_at: true,
          updated_at: true,
        },
      });

      return updatedProduct;
    } catch (err: unknown) {
      throw new Error("Could not update the product.");
    }
  }
}
