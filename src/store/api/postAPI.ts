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
    fetchAllPosts: build.query<IProduct[], { title: string; sortBy?: string }>({
      query: ({ title, sortBy }) => {
        let queryString = `products?q=${title}`;
        if (sortBy === "PriceHighToLow") {
          queryString += "&_sort=price&_order=desc";
        } else if (sortBy === "PriceLowToHigh") {
          queryString += "&_sort=price&_order=asc";
        } else if (sortBy === "TopRatingFirst") {
          queryString += "&_sort=rating&_order=desc";
        }
        return queryString;
      },
      providesTags: (result) => ["Post"],
    }),
  }),
});
