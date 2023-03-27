import type { PropsWithChildren } from "react";

export type WithChildren<T = {}> = T & PropsWithChildren<{}>;

export type StoreColors = "Black" | "Red" | "White" | "Blue" | "Gray" | "Brown";

export type SortProductsType =
  | "PriceLowToHigh"
  | "PriceHighToLow"
  | "TopRatingFirst"
  | undefined;
