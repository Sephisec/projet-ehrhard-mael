import { Module } from '@nestjs/common';
import { CatalogueController } from './catalogue.controller';
import { CatalogueService } from './catalogue.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Product } from './product.model';

@Module({
  imports: [SequelizeModule.forFeature([Product])],
  controllers: [CatalogueController],
  providers: [CatalogueService],
})
export class CatalogueModule {}
