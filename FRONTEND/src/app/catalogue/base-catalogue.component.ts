import { Observable } from 'rxjs';
import { Product } from '../shared/models/product.model';
import { CatalogueService } from '../shared/services/catalogue.service';

export class BaseCatalogueComponent {
  products$: Observable<Product[]>;
  constructor(protected readonly catalogueService: CatalogueService) {}
}
