import { FaUserAlt, FaBell, FaSistrix } from "react-icons/fa";
import prof from "../../../app/assets/images/prof.jpg";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  const urlLocation = window.location.pathname.substring(1);

  function capitalizeFirstLetter(e) {
    return e.charAt(0).toUpperCase() + e.slice(1);
  }
  const urlLocationCapitalize = capitalizeFirstLetter(`${urlLocation}`);
  console.log(urlLocationCapitalize);

  return (
    <div className=" sticky-top " id="topnavBar">
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        className="d-block d-lg-none  h-auto "
        id="naveToggler"
      >
        <Navbar.Brand href="#home" id="navLogo">
          MyDashboard
        </Navbar.Brand>

        <Navbar.Toggle
          className="text-top"
          aria-controls="responsive-navbar-nav"
          id="NavBtnBurger"
        />

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto mt-4 bolder">
            <Nav.Link href="/dashboard">Dashboard</Nav.Link>
            <Nav.Link href="dashboard/event">Event</Nav.Link>

            <NavDropdown title="Courses" id="collasible-nav-dropdown">
              <NavDropdown.Item href="courses">Bootstrap</NavDropdown.Item>
              <NavDropdown.Item href="courses">React</NavDropdown.Item>
              <NavDropdown.Item href="courses">Node Js</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="courses">
                Web Architecture
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="Inbox">Inbox</Nav.Link>
            <Nav.Link href="resources">Resources</Nav.Link>
            <Nav.Link eventKey={2} href="/">
              Sign Out
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <header
        class="navbar navbar-main d-none d-lg-block navbar-expand-lg  py-2 px-3 "
        id="navbar_top"
      >
        <div class=" w-100 d-flex justify-content-between">
          <div aria-label="breadcrumb " className="d-lg-block d-none">
            <ol class="breadcrumb bg-transparent mb-0 pb-0 pt-1 px-0 me-sm-6 me-5">
              <li class="breadcrumb-item text-sm">
                <a class="opacity-5 text-white" href="">
                  Pages
                </a>
              </li>
              <li
                class="breadcrumb-item text-sm text-white active"
                aria-current="page"
              >
                {urlLocation}
              </li>
            </ol>
            <h5 class="font-weight-bolder mb-0 text-secondary">
              {urlLocationCapitalize}
            </h5>
          </div>

          <div
            class="collapse navbar-collapse d-lg-flex justify-content-end mt-sm-0 mt-2 me-md-0 me-sm-4 w-auto"
            id="navbar"
          >
            <div class="ms-md-auto pe-md-3 d-flex align-items-center">
              <div class="input-group">
                <span class="input-group-text text-body text-primary bg-secondary">
                  <FaSistrix aria-hidden="true" />
                </span>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Type here..."
                />
              </div>
            </div>
            <ul class="navbar-nav justify-content-end">
              <li class="nav-item d-flex align-items-center">
                <Link
                  to="/"
                  class="nav-link text-body font-weight-bold px-2 p-1 ml-2 btn btn-outline-primary"
                >
                  <FaUserAlt icon="fa-solid fa-bars " />
                  <span class="ps-1 d-sm-inline d-none ">Sign out</span>
                </Link>
              </li>

              <li class="nav-item px-3 d-flex align-items-center">
                <a href="" class="nav-link text-body p-0">
                  <FaBell class="fa fa-cog cursor-pointer" id="setting" />
                </a>
              </li>
              <div className="h-100">
                <Link to="profile" className="h-100">
                  <img src={prof} alt="" className="profileImage" />
                </Link>
              </div>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
