import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ProductItemComponent, PageNotFoundComponent],
  imports: [CommonModule],
  exports: [
    ProductItemComponent,
    PageNotFoundComponent,
    CommonModule,
    FormsModule,
  ],
})
export class SharedModule {}
