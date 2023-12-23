import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { CatalogueService } from './catalogue.service';
import { SearchDto } from './search.dto';
import { CreateProductDto } from './create-product.dto';

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

  @Post()
  create(@Body() payload: CreateProductDto) {
    return this.catalogueService.createOne(payload);
  }
}
