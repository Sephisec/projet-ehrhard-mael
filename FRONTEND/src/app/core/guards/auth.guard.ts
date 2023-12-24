import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';

export const authGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  if (authService.isLoggedIn()) {
    return true;
  }
  return router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
};

export const loggedInGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
  const router = inject(Router);
  if (authService.isLoggedIn()) {
    router.navigate(['']);
    return false;
  }
  return true;
};
