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
    fetchAllPosts: build.query<IProduct[], string>({
      query: (title: string) => `products?q=${title}`,
      providesTags: (result) => ["Post"],
    }),
    getSinglePost: build.query({
      query: (postId) => `/products/${postId}`,
    }),
  }),
});
