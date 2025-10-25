import { z } from "zod";

export const updateProductSchema = z.object({
  name: z.string().min(1, "Name cannot be empty").optional(),
  price: z.number().positive("Price must be greater than 0").optional(),
  category: z.string().min(1, "Category cannot be empty").optional(),
});

export type UpdateProductDTO = z.infer<typeof updateProductSchema>;
