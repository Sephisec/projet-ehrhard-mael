import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/product.model';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { ProductWithQuantity } from '../../models/product-state.model';
registerLocaleData(localeFr, 'fr');

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent {
  @Input() product: Product;
  quantity: number;
  @Output() addToCartEvent = new EventEmitter<ProductWithQuantity>();
  addToCart(product: Product, quantity: number) {
    this.addToCartEvent.emit({ product, quantity });
  }
}
