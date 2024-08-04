import { z } from "zod";

export const catSchema = z.object({
  id: z.number().optional(),
  name: z.string().min(3).max(100),
  owner: z.string().min(3).max(100),
  age: z.number().min(1).max(30),
});

export type Cat = z.TypeOf<typeof catSchema> & { id: number };
