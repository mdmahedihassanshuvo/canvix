import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Page/Home/Home";
import About from "../Page/About/About";
import Contact from "../Page/Contact/Contact";
import Project from "../Page/Project/Project";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/project",
        element: <Project />,
      },
    ],
  },
]);

export default router;
