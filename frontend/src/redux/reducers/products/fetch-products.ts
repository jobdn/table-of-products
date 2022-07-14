import { AppDispath } from "../..";
import { fetchProducts, fetchProductsError, fetchProductsSuccess } from ".";
import axios, { AxiosResponse } from "axios";
import { IFetchProductsResponse } from "../../../models/IFetchProductsResponse";
import { IFilter } from "../../../models/IFilter";

export const fetchProductsThunk =
  (page: number, filter?: IFilter) => async (dispatch: AppDispath) => {
    try {
      dispatch(fetchProducts(page));

      const baseURL = "/api/products";
      let res: AxiosResponse<IFetchProductsResponse>;

      if (filter) {
        res = await axios.get(
          `${baseURL}?page=${page}&colType=${filter.type}&col=${filter.col}&condition=${filter.condition}&filterValue=${filter.filterValue}`
        );
      } else {
        res = await axios.get(`${baseURL}?page=${page}`);
      }

      dispatch(
        fetchProductsSuccess({
          products: res.data.products,
          totalProducts: res.data.totalProducts,
        })
      );
    } catch (error) {
      dispatch(fetchProductsError("FETCH USER REQUEST FAILER"));
    }
  };
