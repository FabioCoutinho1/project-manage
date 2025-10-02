import { createBrowserRouter } from "react-router";
import Home from "../components/pages/Home";
import Projects from "../components/pages/Projects";
import Layout from "../components/layout/Layout";
import NewProject from "../components/pages/NewProject";
import ProjectEdit from "../components/pages/ProjectEdit";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", Component: Home },
      { path: "projects", Component: Projects },
      { path: "newProject", Component: NewProject },
      { path: "projectEdit", Component: ProjectEdit },
    ],
  },
]);

export default Router;
