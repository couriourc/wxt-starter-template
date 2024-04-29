import {z} from "zod";

export const Z_WordActions = z.enum(["delete", "copy"]);
export type TWordActions = z.infer<typeof Z_WordActions>

