import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../layouts/AppLayout";
import Products from "../pages/Products";
import ProductDetails from "../pages/ProductDetails";
import Cart from "../pages/Cart";
import Home from "../pages/home/Home";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import ProtectedRoute from "../components/ProtectedRoute";
import Checkout from "../pages/Checkout";
import Orders from "../pages/Orders";
import OrderDetails from "../pages/OrderDetails";



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
        path: "/cart",
        element:<ProtectedRoute>
                    <Cart />
                </ProtectedRoute>
      },
      {
        path: "/login",
      element: <Login/>
      },
      {
         path: "/register",
        element: <Register/> 
      },
      {
   path: "/checkout",
   element: (
      <ProtectedRoute>
         <Checkout/>
      </ProtectedRoute>)
      },
      {
         path: "/orders",
        element: <Orders/> 
      },
      {
         path: "/ordersDetails/:id",
          element:  (
            <ProtectedRoute>
              <OrderDetails/>
            </ProtectedRoute>) 
      },
    ],
  },
]);

export default router;