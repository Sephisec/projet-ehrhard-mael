import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { catalogueRoutes } from './catalogue-routes.constant';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { CatalogueSearchComponent } from './catalogue-search/catalogue-search.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [CatalogueComponent, CatalogueSearchComponent],
  imports: [RouterModule.forRoot(catalogueRoutes), SharedModule],
})
export class CatalogueModule {}
