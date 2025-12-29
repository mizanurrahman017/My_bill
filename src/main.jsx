import React from "react";
import "./index.css"; 
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router";
import router from "./Route/Routes";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);