import { Component, Input } from '@angular/core';
import { CatalogueService } from '../../shared/services/catalogue.service';
import { Observable } from 'rxjs';
import { Product } from '../../shared/models/product.model';
import { ProductWithQuantity } from '../../shared/models/product-state.model';
import { AddProduct } from '../../shared/actions/product.action';
import { Store } from '@ngxs/store';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css'],
})
export class CatalogueComponent {
  @Input() products$: Observable<Product[]>;
  constructor(
    private readonly catalogueService: CatalogueService,
    private readonly store: Store,
  ) {
    this.products$ = this.catalogueService.getCatalogue();
  }

  addToCart($event: ProductWithQuantity) {
    this.store.dispatch(new AddProduct($event));
  }
}
