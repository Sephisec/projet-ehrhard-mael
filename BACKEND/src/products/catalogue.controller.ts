import { Controller, Get } from '@nestjs/common';
import { CatalogueService } from './catalogue.service';

@Controller('catalogue')
export class CatalogueController {
  constructor(private readonly catalogueService: CatalogueService) {}
  @Get()
  get() {
    return this.catalogueService.findAll();
  }
}
