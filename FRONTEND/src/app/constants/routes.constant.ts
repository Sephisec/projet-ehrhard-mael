import { Routes } from '@angular/router';
import { AuthComponent } from '../auth/auth.component';
import { CatalogueComponent } from '../catalogue/catalogue.component';

export const routesConstant: Routes = [
  { path: 'login', component: AuthComponent },
  { path: 'catalogue', component: CatalogueComponent },
];
