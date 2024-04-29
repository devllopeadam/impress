import { Outlet } from "react-router-dom";
import { Header, Footer } from "../components";

const Layout = () => {
  return (
    <div className="page-wraper">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
