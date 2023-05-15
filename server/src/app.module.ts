import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PetModule } from './pet/pet.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [PetModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
