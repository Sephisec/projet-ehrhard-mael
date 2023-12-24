import { Routes } from '@angular/router';
import { AuthComponent } from '../../components/auth/auth.component';
import { CatalogueComponent } from '../../components/catalogue/catalogue.component';
import { PageNotFoundComponent } from '../../components/page-not-found/page-not-found.component';
import { authGuard, loggedInGuard } from '../../core/guards/auth.guard';

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
