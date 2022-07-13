import { IProduct } from "./IProduct";

export interface IFetchProductsResponse {
  products: IProduct[];
  totalProducts: number;
}
