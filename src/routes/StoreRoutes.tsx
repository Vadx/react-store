import StoreLayout from "../layouts/StoreLayout";
import StorePage from "../pages/StorePage";
import SinglePostPage from "../pages/SinglePostPage";
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
      element: <SinglePostPage />,
    },
  ],
};

export default StoreRoutes;
