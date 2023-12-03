import { createBrowserRouter } from "react-router-dom";
import React from "react";
import App from "../App";
import Home from "../pages/Home";
import UpdateUserPage from "../pages/UpdateUserPage";
import CreateUserPage from "../pages/CreateUserPage";

// const routes = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       {
//         index: true,
//         element: <Home />,
//       },
//       {
//         path: "/create/:id",
//         element: <CreateUserPage />,
//       },
//       {
//         path: "update/:id",
//         element: <UpdateUserPage />,
//       },
//     ],
//   },
// ]);

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // errorElement: <ErrorPage />,
  },
  {
    path: "update/:id",
    element: <UpdateUserPage />,
  },
  {
    path: "/create",
    element: <CreateUserPage />,
  },
]);

export default routes;
