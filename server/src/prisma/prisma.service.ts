import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient {
  constructor() {
    super({
      datasources: {
        db: {
          url: 'mongodb+srv://petstorehtd:petstorehtd@pet-store-htd.blrw50z.mongodb.net/PetStoreHTD?retryWrites=true&w=majority',
        },
      },
    });
  }
}
