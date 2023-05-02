import { createBrowserRouter } from "react-router-dom";
import Home from "../layouts/Home";
import Login from "../pages/Login";
import MainPage from "../pages/MainPage";
import ChefDetails from "../pages/ChefDetails";

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
        path: "/chef/:id",
        element: <ChefDetails></ChefDetails>,
      },
    ],
  },
]);

export default router;
