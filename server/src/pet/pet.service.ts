import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PetService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    const pet = await this.prisma.pet.create({
      data: {
        name: 'cat',
        age: 8,
      },
    });
    return pet;
  }
}
