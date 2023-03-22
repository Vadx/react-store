import { createBrowserRouter } from "react-router-dom";
import StoreRoutes from "./StoreRoutes";
import ErrorRoutes from "./ErrorRoutes";
import LandingRoutes from "./LandingRoutes";

export const router = createBrowserRouter([
  LandingRoutes,
  StoreRoutes,
  ErrorRoutes,
]);
