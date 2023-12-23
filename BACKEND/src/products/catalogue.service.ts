import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Product } from './product.model';
import { Op } from 'sequelize';
import { SearchDto } from './search.dto';

@Injectable()
export class CatalogueService {
  constructor(@InjectModel(Product) private catalogue: typeof Product) {}

  async findAll() {
    return this.catalogue.findAll();
  }

  async findByName(searchOptions: SearchDto) {
    return this.catalogue.findAll({
      where: {
        name: {
          [Op.iLike]: `%${searchOptions.name}%`,
        },
      },
    });
  }
}
