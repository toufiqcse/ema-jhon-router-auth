// @ts-nocheck
import { createBrowserRouter } from "react-router-dom";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Inventory from "../components/Inventory/Inventory";
import Order from "../components/Order/Order";
import ProcessOrder from "../components/Order/ProcessOrder";
import ReviewOrder from "../components/Order/ReviewOrder";
import Products from "../components/Products/Products";
import Main from "../layout/Main/Main";
import { productsAndCartLoader } from "../loaders/productAndCartLoader";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Shipping from "../pages/Shipping/Shipping";
import PrivateRoute from "./PrivateRoute";
const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/home",
        loader: async () => {
          return fetch("NavMenu.json");
        },
        element: <Home />,
      },
      {
        path: "order",
        loader: productsAndCartLoader,
        element: <Order />,
      },
      {
        path: "/inventory",
        element: <Inventory />,
      },
      {
        path: "/products",
        loader: async () => {
          return fetch("emajhonProducts.json");
        },
        element: <Products />,
      },
      {
        path: "/login",
        element: <Login />,
      },

      {
        path: "/register",
        element: <Register></Register>,
      },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      {
        path: "order",
        element: <ReviewOrder />,
      },
      {
        path: "/shipping",
        element: (
          <PrivateRoute>
            {" "}
            <Shipping></Shipping>{" "}
          </PrivateRoute>
        ),
      },
    ],
  },
]);
export default routes;
