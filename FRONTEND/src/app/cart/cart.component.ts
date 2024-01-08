import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { ProductWithQuantity } from '../shared/models/product-state.model';
import { Observable } from 'rxjs';
import {
  ClearCart,
  DecrementProductQuantity,
} from '../shared/actions/product.action';
import { MatDialog } from '@angular/material/dialog';
import { PaymentConfirmationDialogComponent } from './payment-confirmation-dialog/payment-confirmation-dialog.component';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  products$: Observable<ProductWithQuantity[]>;
  constructor(
    private readonly store: Store,
    private readonly dialog: MatDialog,
  ) {
    this.products$ = this.store.select((state) => state.products.products);
  }

  onRemoveFromCart($event: ProductWithQuantity) {
    this.store.dispatch(new DecrementProductQuantity($event));
  }

  onPay(): void {
    const dialogRef = this.dialog.open(PaymentConfirmationDialogComponent);

    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result) {
        this.store.dispatch(new ClearCart());
      }
    });
  }
}
