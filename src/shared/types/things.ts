import z from "zod";

export const ThingSchema = z.object({
  id: z.uuid(),
  name: z.string().min(2).max(100),
  createdAt: z.date().default(() => new Date()),
  updatedAt: z.date().default(() => new Date()),
});

export type Thing = z.infer<typeof ThingSchema>;
export const ThingArraySchema = z.array(ThingSchema);
export type ThingArray = z.infer<typeof ThingArraySchema>;
