import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home.jsx";
import Bills from "../Pages/Home/Bill/Bills.jsx";
import Details from "../Pages/Home/Details/Details.jsx"
import Login from "../Component/login.jsx";
import Register from "../Component/Register.jsx";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/bills",
        element: <Bills />,
      },
      {
        path: "/bills/:id",
        element: <Details/>,
      },
      {
        path: "login",
        element: <Login/>
      },
      {
        path: "register",
        element: <Register/>
      },
    ],
  },
]);

export default router;