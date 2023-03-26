import { configureStore } from "@reduxjs/toolkit";
import { productAPI } from "./api/productAPI";

export const store = configureStore({
  reducer: {
    [productAPI.reducerPath]: productAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat([productAPI.middleware]),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
