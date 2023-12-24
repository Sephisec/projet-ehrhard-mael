import { Product } from '../models/product.model';

export class AddProduct {
  static readonly type = '[Product] Add';
  constructor(public payload: Product) {}
}

export class IncrementProductQuantity {
  static readonly type = '[Product] IncrementQuantity';
  constructor(public index: number) {}
}

export class RemoveProduct {
  static readonly type = '[Product] Remove';

  constructor(public payload: Product) {}
}
