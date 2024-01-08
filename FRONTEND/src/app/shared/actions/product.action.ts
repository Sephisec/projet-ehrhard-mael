import { ProductWithQuantity } from '../models/product-state.model';

export class AddProduct {
  static readonly type = '[Product] Add';
  constructor(public payload: ProductWithQuantity) {}
}

export class IncrementProductQuantity {
  static readonly type = '[Product] IncrementQuantity';
  constructor(public payload: { index: number; quantity: number }) {}
}

export class DecrementProductQuantity {
  static readonly type = '[Product] DecrementQuantity';

  constructor(public payload: ProductWithQuantity) {}
}

export class ClearCart {
  static readonly type = '[Product] ClearCart';
}
