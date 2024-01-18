import type { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { LoginSchema } from "./schemas";
import { api } from "./routes";

export default {
  providers: [
    Credentials({
      async authorize(credentials) {
        const validatedFields = LoginSchema.safeParse(credentials);
        if (validatedFields.success) {
          const { phone, password } = validatedFields.data;

          const res = await fetch(api.signIn, {
            method: "POST",
            body: JSON.stringify({
              phone,
              password,
            }),
            credentials: "include",
            headers: {
              "Content-Type": "application/json",
            },
          });
          if (!res.ok) return null;

          const user = await res.json();

          return user;
        }

        return null;
      },
    }),
  ],
} satisfies NextAuthConfig;
