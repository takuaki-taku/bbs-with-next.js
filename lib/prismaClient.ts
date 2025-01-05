import { PrismaClient } from "@prisma/client";

const prismaClientSingleton = () => {
  return new PrismaClient();
};

// 型定義の拡張
declare global {
  let prisma: PrismaClient | undefined; // 重要な変更点: undefined を含むように修正
}

// 既存のコード
const prisma = globalThis.prisma || prismaClientSingleton();

export default prisma;

if (process.env.NODE_ENV !== "production") globalThis.prisma = prisma;