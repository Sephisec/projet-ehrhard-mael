import { Routes } from '@angular/router';
import { authGuard } from '../core/guards/auth.guard';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { CatalogueWithSearchBarComponent } from './catalogue-with-search-bar/catalogue-with-search-bar.component';

export const catalogueRoutes: Routes = [
  {
    path: 'catalogue',
    canActivate: [authGuard],
    children: [
      {
        path: '',
        component: CatalogueComponent,
      },
      {
        path: 'search',
        component: CatalogueWithSearchBarComponent,
      },
    ],
  },
];
