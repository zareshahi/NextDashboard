"use server";

import { z } from "zod";
import { RegisterSchema } from "@/schemas";
import { api } from "@/routes";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "مقادیر فرم اشتباه هستند" };
  }

  const { phone, password, name } = validatedFields.data;

  const res = await fetch(api.signUp, {
    method: "POST",
    body: JSON.stringify({
      name,
      phone,
      password,
    }),
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  });
  // TODO: Send Phone Verification
  if (res.ok) {
    return { success: "ثبت نام موفقیت آمیز" };
  } else {
    return { error: "وجود خطا در ثبت نام" };
  }
};
