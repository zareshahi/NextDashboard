import { db } from "@/lib/db";

export const getUserByPhone = async (phone: string) => {
  try {
    const user = await db.user.findUnique({ where: { phone } });
    return user;
  } catch (error) {
    return null;
  }
};

export const getUserById = async (id: string) => {
  try {
    const user = await db.user.findUnique({ where: { id } });
    return user;
  } catch (error) {
    return null;
  }
};
