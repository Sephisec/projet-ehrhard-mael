import { Component } from '@angular/core';
import { CatalogueService } from '../../shared/services/catalogue.service';
import { BaseCatalogueComponent } from '../base-catalogue.component';
import {
  BehaviorSubject,
  debounceTime,
  distinctUntilChanged,
  switchMap,
} from 'rxjs';

@Component({
  selector: 'app-catalogue-search',
  templateUrl: './catalogue-search.component.html',
  styleUrls: ['./catalogue-search.component.css'],
})
export class CatalogueSearchComponent extends BaseCatalogueComponent {
  searchTerm$ = new BehaviorSubject('');
  constructor(catalogueService: CatalogueService) {
    super(catalogueService);
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
