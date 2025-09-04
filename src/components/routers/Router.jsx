import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import Projects from "../pages/Projects";
import Layout from "../layout/Layout";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", Component: Home },
      { path: "projects", Component: Projects },
    ],
  },
]);

export default Router;
