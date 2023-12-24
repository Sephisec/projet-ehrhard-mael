import { Action, Selector, State, StateContext } from '@ngxs/store';
import { ProductStateModel } from '../models/product-state.model';
import {
  AddProduct,
  IncrementProductQuantity,
  RemoveProduct,
} from '../actions/product.action';
import { Injectable } from '@angular/core';

@State<ProductStateModel>({
  name: 'products',
  defaults: {
    products: [],
  },
})
@Injectable()
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
    const index = state.products.findIndex(
      (p) => p.product.id === payload.product.id,
    );
    const productExists = index > -1;
    if (productExists) {
      dispatch(
        new IncrementProductQuantity({
          index: index,
          quantity: payload.quantity,
        }),
      );
    } else {
      patchState({
        products: [...state.products, payload],
      });
    }
  }

  @Action(IncrementProductQuantity)
  increment(
    { getState, patchState }: StateContext<ProductStateModel>,
    { payload }: IncrementProductQuantity,
  ) {
    const state = getState();
    const { index } = payload;
    const { quantity } = payload;
    state.products[index].quantity += quantity;
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
