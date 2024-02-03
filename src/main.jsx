import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Route/Route.jsx";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="" style={{maxWidth: "1920px"}}>
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);
