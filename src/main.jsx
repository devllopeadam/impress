/* eslint-disable react-refresh/only-export-components */
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  Layout,
  Home,
  Features,
  Pricing,
  About,
  Error,
  Blogs,
  Blog,
  Contact,
} from "./pages";
import { blogLoader } from "./pages/Blog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/features",
        element: <Features />,
      },
      {
        path: "/pricing",
        element: <Pricing />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/blog",
        element: <Blogs />,
      },
      {
        path: "/blog/:name",
        loader: blogLoader,
        element: <Blog />,
      },
      {
        path: "/contact-us",
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}></RouterProvider>
);
