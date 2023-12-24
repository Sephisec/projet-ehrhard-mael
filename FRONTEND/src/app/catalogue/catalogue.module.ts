import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { catalogueRoutes } from './catalogue-routes.constant';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { CatalogueWithSearchBarComponent } from './catalogue-with-search-bar/catalogue-with-search-bar.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [CatalogueComponent, CatalogueWithSearchBarComponent],
  imports: [RouterModule.forRoot(catalogueRoutes), SharedModule],
})
export class CatalogueModule {}
