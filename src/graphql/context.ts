import { PrismaClient } from '@prisma/client';
import { prisma } from '../infra/database';

export type Context = {
  prisma: PrismaClient;
};

export const context = {
  prisma,
};
