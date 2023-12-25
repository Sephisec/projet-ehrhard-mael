import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductWithQuantity } from '../../shared/models/product-state.model';
import { Product } from '../../shared/models/product.model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css'],
})
export class CartItemComponent {
  @Input() productWithQuantity: ProductWithQuantity;
  @Output() toRemoveEvent = new EventEmitter<ProductWithQuantity>();
  quantityToRemove: number;

  onRemove(productWithQuantity: Product, quantityToRemove: number) {
    this.toRemoveEvent.emit({
      product: productWithQuantity,
      quantity: quantityToRemove,
    });
  }
}
