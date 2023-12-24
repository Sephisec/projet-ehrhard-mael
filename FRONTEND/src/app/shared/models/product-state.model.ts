import { Product } from './product.model';

export class ProductStateModel {
  products: ProductWithQuantity[];
}

export class ProductWithQuantity {
  product: Product;
  quantity: number;
}
