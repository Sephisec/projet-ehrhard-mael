import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductItemComponent } from './product-item/product-item.component';
import { CatalogueComponent } from './catalogue/catalogue.component';

@NgModule({
  declarations: [AppComponent, ProductItemComponent, CatalogueComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
