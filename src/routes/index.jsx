import { createBrowserRouter } from "react-router-dom"
import React from "react";
import App from "../App";
import Home from "../pages/Home";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);

export default routes;
