import { z } from "zod";
import validator from "validator";

export const LoginSchema = z.object({
  phone: z.string().refine(validator.isMobilePhone, "شماره موبایل اشتباه است"),
  password: z.string().min(1, { message: "رمز عبور مورد نیاز است" }),
});

export const RegisterSchema = z.object({
  phone: z.string().refine(validator.isMobilePhone, "شماره موبایل اشتباه است"),
  password: z
    .string()
    .min(6, { message: "رمز عبور حداقل شامل ۶ حرف باید باشد" }),
  name: z.string().min(1, {
    message: "نام ضروری می‌باشد",
  }),
});
