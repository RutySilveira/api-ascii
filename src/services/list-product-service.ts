import { prismaClient } from "../prisma/index.js";

export default class ListProductService {
  async execute() {
    try {
      const products = await prismaClient.product.findMany({
        select: {
          id: true,
          name: true,
          price: true,
          category: true,
          created_at: true,
          updated_at: true,
        },
      });

      return products;
    } catch (err: unknown) {
      console.error("Erro ao listar produtos:", err);
      throw new Error("Não foi possível listar os produtos.");
    }
  }
}
