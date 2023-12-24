import { Component } from '@angular/core';
import { CatalogueService } from '../../shared/services/catalogue.service';
import { Observable } from 'rxjs';
import { Product } from '../../shared/models/product.model';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css'],
})
export class CatalogueComponent {
  products$: Observable<Product[]>;
  constructor(private readonly catalogueService: CatalogueService) {
    this.products$ = this.catalogueService.getCatalogue();
  }
}
