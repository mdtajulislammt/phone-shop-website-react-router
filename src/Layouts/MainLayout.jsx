import { Outlet } from "react-router-dom";
import Navber from "../Components/Header/Navber/Navber";
import Footer from "../Components/Footer/Footer";

const MainLayout = () => {
  return (
    <div>
      <div className="mx-8 md:mx-10 lg:mx-16 ">
        <div className="mb-5">
          <Navber></Navber>
        </div>
        <div className=" ">
           <Outlet></Outlet>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
