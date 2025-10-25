import { prismaClient } from "../prisma/index.js";

export default class GetProductService {
  async execute(id: string) {
    try {
      const product = await prismaClient.product.findUnique({
        where: { id },
        select: {
          id: true,
          name: true,
          price: true,
          category: true,
          created_at: true,
          updated_at: true,
        },
      });
      return product ?? null;
    } catch (err: unknown) {
      throw new Error("Could not retrieve the product.");
    }
  }
}
