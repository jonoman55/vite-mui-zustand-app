// DOCS: https://zod.dev/
import { z } from "zod";

export const UserSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
});

export type User = z.infer<typeof UserSchema>;

export const initialUser: User = {
    email: '',
    password: '',
};
