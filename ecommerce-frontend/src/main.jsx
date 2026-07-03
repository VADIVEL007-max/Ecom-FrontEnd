import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./router/routes";
import "./index.css";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Toaster
      position="top-right"
      reverseOrder={false}
       toastOptions={{
      duration: 3000,
      style: {
        borderRadius: "12px",
        background: "#333",
        color: "#fff",
    },
  }}
    />
  </React.StrictMode>
);  
   
  
