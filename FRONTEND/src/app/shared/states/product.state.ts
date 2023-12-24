import { Action, Selector, State, StateContext } from '@ngxs/store';
import { ProductStateModel } from '../models/product-state.model';
import {
  AddProduct,
  IncrementProductQuantity,
  RemoveProduct,
} from '../actions/product.action';

@State<ProductStateModel>({
  name: 'products',
  defaults: {
    products: [],
  },
})
export class ProductState {
  @Selector()
  static getProducts(state: ProductStateModel) {
    return state.products ?? [];
  }

  @Action(AddProduct)
  add(
    { getState, patchState, dispatch }: StateContext<ProductStateModel>,
    { payload }: AddProduct,
  ) {
    const state = getState();
    const index = state.products.findIndex((p) => p.product.id === payload.id);
    const productExists = index > -1;
    if (productExists) {
      dispatch(new IncrementProductQuantity(index));
    }
    patchState({
      products: [...state.products, { product: payload, quantity: 1 }],
    });
  }

  @Action(IncrementProductQuantity)
  increment(
    { getState, patchState }: StateContext<ProductStateModel>,
    { index }: IncrementProductQuantity,
  ) {
    const state = getState();
    state.products[index].quantity++;
    patchState({ ...state });
  }

  @Action(RemoveProduct)
  remove(
    { getState, patchState }: StateContext<ProductStateModel>,
    { payload }: RemoveProduct,
  ) {
    const state = getState();
    patchState({
      products: [...state.products.filter((p) => p.product.id !== payload.id)],
    });
  }
}
