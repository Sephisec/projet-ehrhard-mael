import { Routes } from '@angular/router';
import { authGuard } from '../core/guards/auth.guard';
import { CartComponent } from './cart.component';

export const cartRoutes: Routes = [
  { path: 'cart', component: CartComponent, canActivate: [authGuard] },
];
