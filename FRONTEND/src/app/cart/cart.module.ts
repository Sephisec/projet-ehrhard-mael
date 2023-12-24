import { NgModule } from '@angular/core';
import { CartComponent } from './cart.component';
import { NgxsModule } from '@ngxs/store';
import { RouterModule } from '@angular/router';
import { cartRoutes } from './cart-routes.constant';
import { SharedModule } from '../shared/shared.module';
import { ProductState } from '../shared/states/product.state';

@NgModule({
  declarations: [CartComponent],
  imports: [
    NgxsModule.forRoot([ProductState]),
    RouterModule.forChild(cartRoutes),
    SharedModule,
  ],
})
export class CartModule {}
