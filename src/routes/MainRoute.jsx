import { createBrowserRouter } from "react-router-dom";
import Home from "../layouts/Home";
import Login from "../pages/Login";
import MainPage from "../pages/MainPage";

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
    ],
  },
]);

export default router;
