"use server";

import { z } from "zod";
import { RegisterSchema } from "@/schemas";
import { api } from "@/routes";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "مقادیر فرم اشتباه هستند" };
  }

  let { phone, password, name } = validatedFields.data;

  if (phone.startsWith("0")) {
    if (phone.length != 11) {
      return { error: "شماره وارد شده صحیح نمی‌باشد" };
    }
    phone = "+98" + phone.substring(1);
  }

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
