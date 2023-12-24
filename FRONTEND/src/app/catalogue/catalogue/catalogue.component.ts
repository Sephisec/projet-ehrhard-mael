import { Component } from '@angular/core';
import { CatalogueService } from '../../shared/services/catalogue.service';
import { BaseCatalogueComponent } from '../base-catalogue.component';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css'],
})
export class CatalogueComponent extends BaseCatalogueComponent {
  constructor(catalogueService: CatalogueService) {
    super(catalogueService);
    this.products$ = this.catalogueService.getCatalogue();
  }
}
