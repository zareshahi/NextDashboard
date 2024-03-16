"use server";

import { z } from "zod";
import { RegisterSchema } from "@/schemas";
import bcrypt from "bcryptjs";
import { db } from "@/lib/db";
import { getUserByPhone } from "@/data/user";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "مقادیر فرم اشتباه هستند" };
  }

  let { phone, password, name } = validatedFields.data;

  const hashedPassword = await bcrypt.hash(password, 10);

  if (phone.startsWith("0")) {
    if (phone.length != 11) {
      return { error: "شماره وارد شده صحیح نمی‌باشد" };
    }
    phone = "+98" + phone.substring(1);
  }

  const existingUser = await getUserByPhone(phone);

  if (existingUser) {
    return { error: "شماره تکراری است" };
  }

  await db.user.create({
    data: {
      name,
      phone,
      password: hashedPassword,
    },
  });

  return { success: "ثبت نام موفقیت آمیز" };
  // TODO: Send Phone Verification
};
