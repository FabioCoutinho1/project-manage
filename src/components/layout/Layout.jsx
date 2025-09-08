import NavBar from "./NavBar";
import Footer from "./Footer";
import { Outlet, useLocation } from "react-router";

const Layout = () => {
  const layoutClasess = {
    "/": "items-center",
    projects: "items-start",
  };

  let location = useLocation();

  return (
    <div className="flex flex-col h-dvh min-h-dvh ">
      <NavBar />
      <main
        className={`flex-1 flex justify-center ${
          layoutClasess[location.pathname]
        } `}
      >
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
