import "./Dashboard.css";
import { Routes, Route, Outlet } from "react-router-dom";
import { useParams } from "react-router-dom";
import SideNav from "./component/SideNav/SideNav";
import Footer from "./component/Footer/Footer";
import Header from "./component/Header/Header";
import Activity from "./Pages/Activity/Activity";
import Course from "./Pages/Course_page/Course";
import Event from "./Pages/Event_page/Event";
import Inbox from "./Pages/Inbox_page/Inbox";
import Resources from "./Pages/Resource_page/Resources";
import Profile from "./Pages/Profile_page/Profile";
import Help from "./Pages/Help/Help";
import GetCourse from "./Pages/Activity/getCourse";

const Dashboard = ({authorised}) => {
  

  if(!authorised){
    return <Help />
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
          {/* <Routes>
             <Route path="/*" element={<Activity />} />
             <Route path="courses" element={<Course />} />
            <Route path="event" element={<Event />} />
            <Route path="inbox" element={<Inbox />} />
            <Route path="resources" element={<Resources />} />
            <Route path="profile" element={<Profile />} />
            <Route path="help" element={<Help />} />
            <Route path="getcourse" element={<GetCourse />} />
          </Routes> */}
         
            
          </>
        </div>
        {/* --------End the main dody component that rerendered in every routes --------*/}

        <Footer />
      </div>
    </div>
  );
};

export default Dashboard;
