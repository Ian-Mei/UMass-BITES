import { z } from 'zod';

export const UserSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  profilePicture: z.number(),
  currentStreak: z.number(),
  maxStreak: z.number(),
  weight: z.number(),
  height: z.number(),
  allergies: z.array(z.string()),
  goalCals:z.number(),
  goalProtein:z.number(),
});
