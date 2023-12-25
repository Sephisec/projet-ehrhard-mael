import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { publicGuard } from '../core/guards/auth.guard';
import { RegisterComponent } from './register/register.component';

export const authRoutes: Routes = [
  { path: 'login', component: LoginComponent, canActivate: [publicGuard] },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [publicGuard],
  },
];
