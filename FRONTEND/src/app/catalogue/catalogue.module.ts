import { DEFAULT_CURRENCY_CODE, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { catalogueRoutes } from './catalogue-routes.constant';

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(catalogueRoutes)],
})
export class CatalogueModule {}
