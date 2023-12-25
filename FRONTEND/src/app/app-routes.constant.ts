import { Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { loggedInGuard } from './core/guards/auth.guard';

export const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'login', component: AuthComponent, canActivate: [loggedInGuard] },
  { path: '**', component: PageNotFoundComponent },
];
