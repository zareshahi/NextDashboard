"use server";

import { z } from "zod";
import { LoginSchema } from "@/schemas";
import { signIn } from "@/auth";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { AuthError } from "next-auth";
import { getUserByPhone } from "@/data/user";

export const login = async (values: z.infer<typeof LoginSchema>) => {
  const validatedFields = LoginSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "مقادیر فرم اشتباه هستند" };
  }

  let { phone, password } = validatedFields.data;

  if (phone.startsWith("0")) {
    if (phone.length != 11) {
      return { error: "شماره وارد شده صحیح نمی‌باشد" };
    }
    phone = "+98" + phone.substring(1);
  }

  const user = await getUserByPhone(phone);
  if (user?.phoneVerified == false) {
    return { error: "حساب کاربری شما هنوز توسط مدیر سیستم تایید نشده است" };
  }

  try {
    await signIn("credentials", {
      phone,
      password,
      redirectTo: DEFAULT_LOGIN_REDIRECT,
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "مشخصات وارد شده صحیح نمی‌باشد" };
        default:
          return { error: "خطا در ورود به حساب کاربری" };
      }
    }
    throw error;
  }
  return { success: "ورود موفقیت آمیز" };
};
