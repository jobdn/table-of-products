import { AppDispath } from "../..";
import { fetchProducts, fetchProductsError, fetchProductsSuccess } from ".";
import axios, { AxiosResponse } from "axios";
import { IFetchProductsResponse } from "../../../models/IFetchProductsResponse";

export const fetchProductsThunk =
  (page: number, search: string = "") =>
  async (dispatch: AppDispath) => {
    try {
      dispatch(fetchProducts({ page, search }));
      const baseURL = "/api/products";
      const { data }: AxiosResponse<IFetchProductsResponse> = await axios.get(
        `${baseURL}?page=${page}&search=${search}`
      );

      dispatch(
        fetchProductsSuccess({
          products: data.products,
          totalProducts: data.totalProducts,
        })
      );
    } catch (error) {
      dispatch(fetchProductsError("FETCH USER REQUEST FAILER"));
    }
  };
