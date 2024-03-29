import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../../../models/IProduct";
import { IProductsState } from "../../../models/IProductsState";

const initialState: IProductsState = {
  products: [],
  totalProducts: 0,
  isLoading: false,
  error: null,
  page: 1,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    fetchProducts(state, action: PayloadAction<number>) {
      state.isLoading = true;
      state.page = action.payload;
    },
    fetchProductsSuccess(
      state,
      action: PayloadAction<{ products: IProduct[]; totalProducts: number }>
    ) {
      state.error = "";
      state.isLoading = false;
      state.products = action.payload.products;
      state.totalProducts = action.payload.totalProducts;
    },
    fetchProductsError(state, action: PayloadAction<string>) {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export const { fetchProducts, fetchProductsError, fetchProductsSuccess } =
  productsSlice.actions;
export default productsSlice.reducer;
