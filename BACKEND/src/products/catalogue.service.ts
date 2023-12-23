import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Product } from './product.model';

@Injectable()
export class CatalogueService {
  constructor(@InjectModel(Product) private catalogue: typeof Product) {}

  async findAll() {
    return this.catalogue.findAll();
  }

  async findByName(name: string) {
    return this.catalogue.findOne({
      where: {
        name: name,
      },
    });
  }
}
