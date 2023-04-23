import { z } from "zod";

export const LoginFormSchema = z.object({
  email: z.string().nonempty("E-mail é obrigatório."),
  password: z.string().nonempty("Senha é obrigatória."),
});

export type TLoginFormValues = z.infer<typeof LoginFormSchema>;
