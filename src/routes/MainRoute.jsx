import { createBrowserRouter } from "react-router-dom";
import Home from "../layouts/Home";
import Login from "../pages/Login";
import MainPage from "../pages/MainPage";
import ChefDetails from "../pages/ChefDetails";
import Register from "../pages/Register";

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
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Register></Register>,
      },
      {
        path: "/chef/:id",
        element: <ChefDetails></ChefDetails>,
        loader: ({ params }) =>
          fetch(
            `https://the-cheif-finder-server-side-fahimshariar28.vercel.app/chef/${params.id}`
          ),
      },
    ],
  },
]);

export default router;
