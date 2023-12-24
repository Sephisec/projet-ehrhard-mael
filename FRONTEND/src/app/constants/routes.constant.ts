import { Routes } from '@angular/router';
import { AuthComponent } from '../auth/auth.component';
import { CatalogueComponent } from '../catalogue/catalogue.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';

export const routesConstant: Routes = [
  { path: 'login', component: AuthComponent },
  { path: 'catalogue', component: CatalogueComponent },
  { path: '**', component: PageNotFoundComponent },
];
