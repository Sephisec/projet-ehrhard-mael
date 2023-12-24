import { NgModule } from '@angular/core';
import { CartComponent } from './cart.component';
import { NgxsModule } from '@ngxs/store';
import { RouterModule } from '@angular/router';
import { cartRoutes } from './cart-routes.constant';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [CartComponent],
  imports: [
    NgxsModule.forRoot(),
    RouterModule.forChild(cartRoutes),
    SharedModule,
  ],
})
export class CartModule {}
