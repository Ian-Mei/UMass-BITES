import { z } from 'zod';

export const DailiesSchema = z.object({
  currentcals: z.number(),
  currentcarbs: z.number(),
  currentfats: z.number(),
  currentprotein: z.number(),
});
