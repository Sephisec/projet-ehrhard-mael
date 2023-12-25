import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { ProductWithQuantity } from '../shared/models/product-state.model';
import { Observable } from 'rxjs';
import { DecrementProductQuantity } from '../shared/actions/product.action';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  products$: Observable<ProductWithQuantity[]>;
  constructor(private readonly store: Store) {
    this.products$ = this.store.select((state) => state.products.products);
  }

  onRemoveFromCart($event: ProductWithQuantity) {
    this.store.dispatch(new DecrementProductQuantity($event));
  }
}
