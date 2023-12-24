import { Component } from '@angular/core';
import { CatalogueService } from '../../shared/services/catalogue.service';
import {
  BehaviorSubject,
  debounceTime,
  distinctUntilChanged,
  Observable,
  switchMap,
} from 'rxjs';
import { Product } from '../../shared/models/product.model';

@Component({
  selector: 'app-catalogue-with-search-bar',
  templateUrl: './catalogue-with-search-bar.component.html',
  styleUrls: ['./catalogue-with-search-bar.component.css'],
})
export class CatalogueWithSearchBarComponent {
  searchTerm$ = new BehaviorSubject('');
  products$: Observable<Product[]>;
  constructor(private readonly catalogueService: CatalogueService) {
    this.products$ = this.searchTerm$.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      switchMap((term) => this.catalogueService.searchCatalogue(term)),
    );
  }

  onSearch(searchTerm: string) {
    this.searchTerm$.next(searchTerm);
  }
}
