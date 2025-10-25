import { prismaClient, Prisma } from "../prisma/index.js";

export default class DeleteProductService {
  async execute(id: string) {
    try {
      await prismaClient.product.delete({
        where: { id },
      });
      return true;
    } catch (err: unknown) {
      if (err instanceof Prisma.PrismaClientKnownRequestError) {
        if (err.code === "P2025") {
          return false;
        }
      }

      console.error("Database error:", err);
      throw err;
    }
  }
}
