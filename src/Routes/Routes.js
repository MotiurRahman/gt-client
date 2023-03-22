import { createBrowserRouter } from "react-router-dom";
import About from "../Components/About/About";
import Adduser from "../Components/AddUser/Adduser";
import Home from "../Components/Home/Home";
import Login from "../Components/Login/Login";
import Main from "../Layout/Main";

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
        path: "about",
        element: <About></About>,
      },
      {
        path: "add_user",
        element: <Adduser></Adduser>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
    ],
  },
]);

export default router;
