import { z } from "zod";

const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);

export const LoginSchema = z.object({
  phone: z.string().regex(phoneRegex, "شماره موبایل اشتباه است"),
  password: z.string().min(1, { message: "رمز عبور مورد نیاز است" }),
});

export const RegisterSchema = z.object({
  phone: z.string().regex(phoneRegex, "شماره موبایل اشتباه است"),
  password: z
    .string()
    .min(6, { message: "رمز عبور حداقل شامل ۶ حرف باید باشد" }),
  name: z.string().min(1, {
    message: "نام ضروری می‌باشد",
  }),
});
