import { IProduct } from "./IProduct";

export interface IProductsState {
  products: IProduct[];
  totalProducts: number;
  isLoading: boolean;
  error: string | null;
  page: number;
}
