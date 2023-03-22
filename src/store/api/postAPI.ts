import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IPost } from "../../models/IPost";
import { BASE_URL } from "../../config";

export const postAPI = createApi({
  reducerPath: "postAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}`,
  }),
  tagTypes: ["Post"],
  endpoints: (build) => ({
    fetchAllPosts: build.query<IPost[], number>({
      query: (limit: number = 9, page: number = 1) => ({
        url: `/products`,
        params: {
          _limit: limit,
          _page: page,
        },
      }),
      providesTags: (result) => ["Post"],
    }),
    getSinglePost: build.query({
      query: (postId) => `/products/${postId}`,
    }),
  }),
});
