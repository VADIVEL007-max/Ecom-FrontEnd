import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../layouts/AppLayout";
import Products from "../pages/Products";
import ProductDetails from "../pages/ProductDetails";
import Cart from "../pages/Cart";
import Home from "../pages/home/Home";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";



const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Home/>,
      },
      {
        path:"/products",
        element:<Products/>
      },
      {
        path: "products/:id",
        element: <ProductDetails />
      },
      {
        path: "cart",
        element: <Cart />
      },
      {
        path: "/login",
      element: <Login/>
      },
      {
         path: "/register",
        element: <Register/> 
      }
    ],
  },
]);

export default router;