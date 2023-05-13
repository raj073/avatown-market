import { createBrowserRouter } from "react-router-dom";
import Home from "../Component/Home/Home";
import Main from "../Layout/Main";
import AvatarDetails from "../Pages/AvatarDetails/AvatarDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/avatar/:id",
        element: <AvatarDetails></AvatarDetails>,
      },
    ],
  },
]);

export default router;
