import { Outlet } from "react-router-dom";
import { Header, Footer } from "../components";

const Layout = () => {
  return (
    <div className="page-wraper flex flex-col gap-4">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
