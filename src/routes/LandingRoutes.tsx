import BlankLayout from "../layouts/LandingLayout";
import AboutPage from "../pages/AboutPage";
import HomePage from "../pages/HomePage";
import ErrorRouterElement from "./ErrorRouterElement";

const LandingRoutes = {
  path: "/",
  element: <BlankLayout />,
  errorElement: <ErrorRouterElement />,
  children: [
    {
      element: <HomePage />,
      index: true,
    },
    {
      path: "/about",
      element: <AboutPage />,
    },
  ],
};

export default LandingRoutes;
