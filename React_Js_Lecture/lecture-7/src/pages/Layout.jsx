import PageRoute from "./PageRoute";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      {
        path: "/home",
        element: PageRoute.home,
      },
      {
        path: "/service",
        element: PageRoute.service,
      },
      {
        path: "/about",
        element: PageRoute.about,
      },
      {
        path: "/contact",
        element: PageRoute.contact,
      },
      {
        path: "/help",
        element: PageRoute.help,
      },
      {
        path: "*",
        element: PageRoute.error,
      },
    ],
  },
]);
const Layout = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default Layout;
