import { createBrowserRouter } from "react-router-dom";
import Home from "../layouts/Home";
import Login from "../pages/Login";
import MainPage from "../pages/MainPage";
import ChefDetails from "../pages/ChefDetails";
import Register from "../pages/Register";
import PrivateRoute from "./PrivateRoute";
import Blog from "../pages/Blog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/",
        element: <MainPage></MainPage>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Register></Register>,
      },
      {
        path: "/chef/:id",
        element: (
          <PrivateRoute>
            <ChefDetails></ChefDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://the-cheif-finder-server-side-fahimshariar28.vercel.app/chef/${params.id}`
          ),
      },
    ],
  },
]);

export default router;
