import { IProduct } from './types';

export function toggleProduct(product: IProduct) {
  return {
    type: "TOGGLE_PRODUCT",
    product
  }
}