import { z } from 'zod';

const FatSchema = z.object({
  total: z.number(),
  saturated: z.number(),
  trans: z.number(),
});
const CarbSchema = z.object({
  total: z.number(),
  fiber: z.number(),
  sugar: z.number(),
});
export const FoodSchema = z.object({
  name: z.string(),
  servingSize: z.number(),
  servingUnit: z.string(),
  calories: z.number(),
  calsFromFat: z.number(),
  fat: FatSchema,
  cholesterol: z.number(),
  sodium: z.number(),
  carbs: CarbSchema,
  protein: z.number(),
  ingredients: z.string(),
  allergens: z.array(z.string()),
  time: z.string(),
  hall: z.string(),
  station: z.string(),
  nutritionVal: z.number(),
});
