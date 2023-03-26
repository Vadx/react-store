import StoreLayout from "../layouts/StoreLayout";
import StorePage from "../pages/StorePage";
import SingleProductPage from "../pages/SingleProductPage";
import ErrorRouterElement from "./ErrorRouterElement";

const StoreRoutes = {
  path: "/store",
  element: <StoreLayout />,
  errorElement: <ErrorRouterElement />,
  children: [
    {
      element: <StorePage />,
      index: true,
    },
    {
      path: "/store/:postId",
      element: <SingleProductPage />,
    },
  ],
};

export default StoreRoutes;
