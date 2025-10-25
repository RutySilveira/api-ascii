import { PrismaClient, Prisma } from "../generated/prisma/index.js";

const prismaClient = new PrismaClient();

export { prismaClient, Prisma };
