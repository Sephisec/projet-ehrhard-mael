import { Routes } from '@angular/router';
import { AuthComponent } from '../auth/auth.component';
import { CatalogueComponent } from '../catalogue/catalogue.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { authGuard, loggedInGuard } from '../auth/auth.guard';

export const routesConstant: Routes = [
  { path: '', redirectTo: 'catalogue', pathMatch: 'full' },
  { path: 'login', component: AuthComponent, canActivate: [loggedInGuard] },
  {
    path: 'catalogue',
    component: CatalogueComponent,
    canActivate: [authGuard],
  },
  { path: '**', component: PageNotFoundComponent },
];
