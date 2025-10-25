import { z } from "zod";

export const createProductSchema = z.object({
  name: z.string().min(1, "Name invalid"),
  price: z.number().positive("Price must be greater than zero"),
  category: z.string().min(1, "Category invalid"),
});

export type CreateProductDTO = z.infer<typeof createProductSchema>;
