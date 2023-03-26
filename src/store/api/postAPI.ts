import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IProduct } from "../../models/IProduct";
import { BASE_URL } from "../../config";

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
    fetchAllPosts: build.query<
      IProduct[],
      { title: string; sortBy?: string; minPrice?: number; maxPrice?: number }
    >({
      query: ({ title, sortBy, minPrice, maxPrice }) => {
        let queryString = `products?q=${title}`;
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
        return queryString;
      },
      providesTags: (result) => ["Post"],
    }),
  }),
});
