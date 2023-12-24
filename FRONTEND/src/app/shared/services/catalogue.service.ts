import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Product } from '../models/product.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CatalogueService {
  endpoint = `${environment.apiUrl}/catalogue`;
  constructor(private readonly http: HttpClient) {}

  getCatalogue() {
    return this.http.get<Product[]>(this.endpoint);
  }

  searchCatalogue(searchTerm: string) {
    const params = new HttpParams({ fromString: `name=${searchTerm}` });
    return this.http.get<Product[]>(`${this.endpoint}/search`, { params });
  }
}
