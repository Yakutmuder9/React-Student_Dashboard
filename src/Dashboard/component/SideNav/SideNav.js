import Bird from "../../../app/assets/images/bird.png";
import webapp from "../../../app/assets/images/webapp.png";
import "./Sidenav.css";
import React, { useState } from "react";
import { ProSidebar, SidebarHeader } from "react-pro-sidebar";
import { Button } from "reactstrap";
import {
  FiArrowLeft,
  FiArrowRight,
} from "react-icons/fi";
import "react-pro-sidebar/dist/css/styles.css";
import { NavLink } from "react-router-dom";

const SideNav = () => {
  const [menuCollapse, setMenuCollapse] = useState(false);
  const menuIconClick = () => {
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };
  return (
    <>
      <div id="sideNav" className="overflow-auto">
        <ProSidebar collapsed={menuCollapse} className='overflow-auto'>
          <SidebarHeader id="sideNavHeader" >
            <div className="logotext">
              <p>
                {menuCollapse ? (
                  <div className="col shadow d-block" id="DashboardLogo">
                    <img className="ms-2 pt-3 " id="logo_bird" src={Bird} alt=''/>

                    
                  </div>
                ) : (
                  <div className="col shadow " id="DashboardLogo">
                    <img className=" " id="logo_bird" src={Bird} alt=''/>
                    <h1 className="pt-4 pb-4 ps-5 mt-4 bolder">MyDashboard</h1>
                  </div>
                )}
              </p>
            </div>
            <div className="closemenu text-end pe-3" onClick={menuIconClick}>
              {menuCollapse ? <FiArrowRight /> : <FiArrowLeft />}
            </div>
          </SidebarHeader>

          <div className="mt-4 pt-1 h-100 overflow-auto  d-block bg-dark" id="sideNavBtn">
            <NavLink to="/dashboard" className='text-decoration-none'>
              {" "}
              <Button  className=" w-100 mt-2 py-2" variant="white">
                {menuCollapse ? (
                  <div className="">
                    <i className="material-icons me-4">dashboard</i>
                  </div>
                ) : (
                  <>
                    <div className="">
                      <i className="material-icons me-3">dashboard</i>
                    </div>
                    Dashboard
                  </>
                )}
              </Button>{" "}
            </NavLink>
            <NavLink to="/dashboard/courses" className='text-decoration-none'>
              <Button className=" w-100 mt-2 py-2" variant="white">
                {menuCollapse ? (
                  <div className="">
                    <span className="material-icons ">bookmark</span>
                  </div>
                ) : (
                  <>
                    <div className="">
                      <span className="material-icons me-3">bookmark</span>
                    </div>
                    Course
                  </>
                )}
              </Button>{" "}
            </NavLink>
            <NavLink to="/dashboard/event" className='text-decoration-none'>
              <Button className=" w-100 mt-2 py-2" variant="white">
                {menuCollapse ? (
                  <div className="">
                    <span className="material-icons">event</span>
                  </div>
                ) : (
                  <>
                    <div className="">
                      <span className="material-icons me-3">event</span>
                    </div>
                    Event
                  </>
                )}
              </Button>{" "}
            </NavLink>
            <NavLink to="/dashboard/Inbox" className='text-decoration-none'>
              <Button className=" w-100 mt-2 py-2" variant="warning">
                {menuCollapse ? (
                  <div className="">
                    <span className="material-icons">move_to_inbox</span>
                  </div>
                ) : (
                  <>
                    <div className="">
                      <span className="material-icons me-3">move_to_inbox</span>
                    </div>
                    Assessments
                  </>
                )}
              </Button>{" "}
            </NavLink>
            <NavLink to="/dashboard/resources" className='text-decoration-none'>
              <Button className=" w-100 mt-2 py-2" variant="primary">
                {menuCollapse ? (
                  <div className="">
                    <span className="material-icons">library_books</span>
                  </div>
                ) : (
                  <>
                    <div className="">
                      <span className="material-icons me-3">library_books</span>
                    </div>
                    Resources
                  </>
                )}
              </Button>{" "}
            </NavLink >

            <h6
              className="w-100  text-center overflow-hidden" 
              id="acountDetailTx"
              variant="white"
            >
              Acount Detial
            </h6>{" "}

            <NavLink to="/dashboard/profile" className='text-decoration-none'>
              <Button className=" w-100 mt-2 py-2" variant="success">
                {menuCollapse ? (
                  <div className="">
                    <span className="material-icons">account_circle</span>
                  </div>
                ) : (
                  <>
                    <div className="">
                      <span className="material-icons me-3">account_circle</span>
                    </div>
                    Profile
                  </>
                )}
              </Button>{" "}
            </NavLink>
            <NavLink to="/dashboard/help" className='text-decoration-none'>
              <Button className=" w-100 mt-2 py-2" variant="warning">
                {menuCollapse ? (
                  <div className="">
                    <span className="material-icons">help</span>
                  </div>
                ) : (
                  <>
                    <div className="">
                      <span className="material-icons me-3">help</span>
                    </div>
                    Help
                  </>
                )}
              </Button>{" "}
            </NavLink>
            <div
              className="sidenav-footer
        pt-3 mb-5 pb-4"
            >
              <div className="card m-2 " id="sidenavCard">
                <div className="card-body text-start p-3 w-100">
                  <div className="icon icon-shape icon-sm bg-white shadow text-center mb-3 d-flex align-items-center justify-content-center border-radius-md">
                    <i
                      className="ni ni-diamond text-dark text-gradient text-lg top-0"
                      aria-hidden="true"
                    ></i>
                  </div>
                  <div className="docs-info">
                    <h6 className="text-white up mb-0">Need help?</h6>
                    <p className="text-xs font-weight-bold text-secondary">
                      Please check our docs
                    </p>
                    <img src={webapp} alt=''/>
                    <a href=""
                      
                      className="btn btn-white btn-outline-primary btn-sm w-100 text-white mb-0"
                    >
                      Documentation
                    </a>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </ProSidebar>
      </div>
    </>
  );
};

export default SideNav;
