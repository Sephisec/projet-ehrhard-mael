import { Controller, Get, Query } from '@nestjs/common';
import { CatalogueService } from './catalogue.service';
import { SearchDto } from './search.dto';

@Controller('catalogue')
export class CatalogueController {
  constructor(private readonly catalogueService: CatalogueService) {}
  @Get()
  get() {
    return this.catalogueService.findAll();
  }

  @Get('/search')
  getByName(@Query() searchDto: SearchDto) {
    return this.catalogueService.findByName(searchDto);
  }
}
