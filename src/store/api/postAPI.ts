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
      { title: string; sortOrder?: string }
    >({
      query: ({ title, sortOrder = "" }) => {
        const sortParam = sortOrder ? `&_sort=price&_order=${sortOrder}` : "";
        return `products?q=${title}${sortParam}`;
      },
      providesTags: (result) => ["Post"],
      transformResponse: (response: any) => {
        if (response.data && response.args.sortOrder) {
          const sortOrder = response.args.sortOrder.toLowerCase();

          if (sortOrder === "asc") {
            return {
              ...response,
              data: [...response.data].sort((a, b) => a.price - b.price),
            };
          } else if (sortOrder === "asc") {
            return {
              ...response,
              data: [...response.data].sort((a, b) => b.price - a.price),
            };
          }
        }

        return response;
      },
    }),
  }),
});
