import "./Dashboard.css";
import {  Outlet } from "react-router-dom";
import SideNav from "./component/SideNav/SideNav";
import Footer from "./component/Footer/Footer";
import Header from "./component/Header/Header";
import Help from "./Pages/Help/Help";

const Dashboard = ({ authorised }) => {
  if (!authorised) {
    return <Help />;
  }

  return (
    <div className="Dash d-flex">
      <div className="d-none d-xl-block" id="LeftSide">
        <SideNav />
      </div>

      <div className="col" id="rightSide">
        <Header />

        {/* --------Start the main dody component that rerendered in every routes --------*/}
        <div className="dhashboardConatainer">
          <>
            <Outlet />
          </>
        </div>
        {/* --------End the main dody component that rerendered in every routes --------*/}

        <Footer />
      </div>
    </div>
  );
};

export default Dashboard;
