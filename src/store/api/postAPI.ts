import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IProduct } from "../../models/IProduct";
import { BASE_URL } from "../../config";

interface ISort {
  searchTitle: string;
  sortBy?: string;
  minPrice?: number;
  maxPrice?: number;
  colors?: string[];
}

export const postAPI = createApi({
  reducerPath: "postAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}`,
  }),
  tagTypes: ["Post"],
  endpoints: (build) => ({
    getSinglePost: build.query({
      query: (postId) => `/products/${postId}`,
    }),
    fetchAllPosts: build.query<IProduct[], ISort>({
      query: ({ searchTitle, sortBy, minPrice, maxPrice, colors }) => {
        let queryString = `products?q=${searchTitle}`;
        if (sortBy === "PriceHighToLow") {
          queryString += "&_sort=price&_order=desc";
        } else if (sortBy === "PriceLowToHigh") {
          queryString += "&_sort=price&_order=asc";
        } else if (sortBy === "TopRatingFirst") {
          queryString += "&_sort=rating&_order=desc";
        }
        if (minPrice !== undefined) {
          queryString += `&price_gte=${minPrice}`;
        }
        if (maxPrice !== undefined) {
          queryString += `&price_lte=${maxPrice}`;
        }
        if (colors && colors.length > 0) {
          const colorsStr = colors.join("&color=");
          queryString += `&color=${colorsStr}`;
        }
        return queryString;
      },
      providesTags: (result) => ["Post"],
    }),
  }),
});
