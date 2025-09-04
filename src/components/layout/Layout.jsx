import NavBar from "./NavBar";
import Footer from "./Footer";
import { Outlet } from "react-router";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
