import "./profile.css";
import Prof from "../../../app/assets/images/prof.jpg";
import P1 from "../../../app/assets/images/p1.jpg";
import P2 from "../../../app/assets/images/p2.jpg";
import P3 from "../../../app/assets/images/p3.jpg";
import P4 from "../../../app/assets/images/p4.jpg";
import P5 from "../../../app/assets/images/p5.jpg";
import P6 from "../../../app/assets/images/p6.jpg";
import P7 from "../../../app/assets/images/p7.jpg";
import P8 from "../../../app/assets/images/p8.jpg";
import web from "../../../app/assets/images/web.png";
import web2022 from "../../../app/assets/images/web2022.png";
import webapp from "../../../app/assets/images/webapp.png";
import { userdata } from "../../../app/user/userdata";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
const Profile = () => {
  console.log([userdata]);
  return (
    <div className="profile w-100 h-auto">
      <div className="container-fluid profileTop bg-white w-100 d-flex justify-content-between">
        <div className="d-flex align-items-center">
          <div className="profileImg ">
            <img src={userdata[0].imgUrl} alt="" />
          </div>
          <div>
            <h4 className="ps-4 text-dark">Yakut Ahmedin</h4>
            <p className="text-dark ps-4">Student/ Full-Stack-Developer</p>
          </div>
        </div>

        <div className="profright w-50 pe-3">
          <div className="">
            {" "}
            <div className="w-100  d-md-flex d-flex justify-content-between">
              <button className="btn btn-primary py-2 px-5"> App</button>
              <button className="btn btn-secondary py-2 px-5">Message</button>
              <button className="btn btn-secondary py-2 px-5">Setting</button>
            </div>
          </div>
        </div>
      </div>

      <div class="container-fluid py-4">
        <div class="row">
          <div class="col-12 col-xl-4">
            <div class="card h-100">
              <div class="card-header pb-0 p-3">
                <h6 class="mb-0 text-dark">Platform Settings</h6>
              </div>
              <div class="card-body p-3">
                <h6 class="text-uppercase text-body text-xs font-weight-bolder">
                  Account
                </h6>
                <ul class="list-group">
                  <li class="list-group-item border-0 px-0">
                    <div class="form-check form-switch ps-0">
                      <input
                        class="form-check-input ms-auto"
                        type="checkbox"
                        id="flexSwitchCheckDefault"
                        checked
                      />
                      <label
                        class="form-check-label text-body ms-3 text-truncate w-80 mb-0"
                        for="flexSwitchCheckDefault"
                      >
                        Email me when someone follows me
                      </label>
                    </div>
                  </li>
                  <li class="list-group-item border-0 px-0">
                    <div class="form-check form-switch ps-0">
                      <input
                        class="form-check-input ms-auto"
                        type="checkbox"
                        id="flexSwitchCheckDefault1"
                      />
                      <label
                        class="form-check-label text-body ms-3 text-truncate w-80 mb-0"
                        for="flexSwitchCheckDefault1"
                      >
                        Email me when someone answers on my post
                      </label>
                    </div>
                  </li>
                  <li class="list-group-item border-0 px-0">
                    <div class="form-check form-switch ps-0">
                      <input
                        class="form-check-input ms-auto"
                        type="checkbox"
                        id="flexSwitchCheckDefault2"
                        checked
                      />
                      <label
                        class="form-check-label text-body ms-3 text-truncate w-80 mb-0"
                        for="flexSwitchCheckDefault2"
                      >
                        Email me when someone mentions me
                      </label>
                    </div>
                  </li>
                </ul>
                <h6 class="text-uppercase text-body text-xs font-weight-bolder mt-4">
                  Application
                </h6>
                <ul class="list-group">
                  <li class="list-group-item border-0 px-0">
                    <div class="form-check form-switch ps-0">
                      <input
                        class="form-check-input ms-auto"
                        type="checkbox"
                        id="flexSwitchCheckDefault3"
                      />
                      <label
                        class="form-check-label text-body ms-3 text-truncate w-80 mb-0"
                        for="flexSwitchCheckDefault3"
                      >
                        New launches and projects
                      </label>
                    </div>
                  </li>
                  <li class="list-group-item border-0 px-0">
                    <div class="form-check form-switch ps-0">
                      <input
                        class="form-check-input ms-auto"
                        type="checkbox"
                        id="flexSwitchCheckDefault4"
                        checked
                      />
                      <label
                        class="form-check-label text-body ms-3 text-truncate w-80 mb-0"
                        for="flexSwitchCheckDefault4"
                      >
                        Monthly product updates
                      </label>
                    </div>
                  </li>
                  <li class="list-group-item border-0 px-0 pb-0">
                    <div class="form-check form-switch ps-0">
                      <input
                        class="form-check-input ms-auto"
                        type="checkbox"
                        id="flexSwitchCheckDefault5"
                      />
                      <label
                        class="form-check-label text-body ms-3 text-truncate w-80 mb-0"
                        for="flexSwitchCheckDefault5"
                      >
                        Subscribe to newsletter
                      </label>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="col-12 col-xl-4">
            <div class="card h-100">
              <div class="card-header pb-0 p-3">
                <div class="row">
                  <div class="col-md-8 d-flex align-items-center">
                    <h6 class="mb-0 text-dark">Profile Information</h6>
                  </div>
                  <div class="col-md-4 text-end">
                    <a href="">
                      <i
                        class="fas fa-user-edit text-secondary text-sm"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Edit Profile"
                      ></i>
                    </a>
                  </div>
                </div>
              </div>
              <div class="card-body p-3">
                <p class="text-sm text-dark">
                  Hi, Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua. equality).
                </p>
                <hr class="horizontal gray-light my-4"></hr>
                <ul class="list-group">
                  <li class="list-group-item border-0 ps-0 pt-0 text-sm">
                    <strong class="text-dark">Full Name:</strong>
                    &nbsp; Jamaks Der.
                  </li>
                  <li class="list-group-item border-0 ps-0 text-sm">
                    <strong class="text-dark">Mobile:</strong> &nbsp; (22) 123
                    1234 123
                  </li>
                  <li class="list-group-item border-0 ps-0 text-sm">
                    <strong class="text-dark">Email:</strong> &nbsp;{" "}
                  </li>
                  <li class="list-group-item border-0 ps-0 text-sm">
                    <strong class="text-dark">Location:</strong> &nbsp; USA
                  </li>
                  <li class="list-group-item border-0 ps-0 pb-0">
                    <strong class="text-dark text-sm">Social:</strong> &nbsp;
                    <a
                      class="btn btn-facebook btn-simple mb-0 ps-1 pe-2 py-0"
                      href=""
                    >
                      <i class="fab fa-facebook fa-lg"></i>
                    </a>
                    <a
                      class="btn btn-twitter btn-simple mb-0 ps-1 pe-2 py-0"
                      href=""
                    >
                      <i class="fab fa-twitter fa-lg"></i>
                    </a>
                    <a
                      class="btn btn-instagram btn-simple mb-0 ps-1 pe-2 py-0"
                      href=""
                    >
                      <i class="fab fa-instagram fa-lg"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="col-12 col-xl-4" id="Groupfirends">
            <div class="card h-100">
              <div class="card-header pb-0 p-3">
                <h6 class="mb-0 text-dark">Conversations</h6>
              </div>
              <div class="card-body p-3">
                <ul class="list-group">
                  <li class="list-group-item border-0 d-flex align-items-center px-0 mb-2">
                    <div class="avatar me-3">
                      <img
                        src={P3}
                        alt="kal"
                        class="border-radius-lg shadow rounded-circle"
                      />
                    </div>
                    <div class="d-flex align-items-start flex-column justify-content-center">
                      <h6 class="mb-0 text-sm text-dark">Porto Fr.</h6>
                      <p class="mb-0 text-xs text-dark">
                        How was every thing...
                      </p>
                    </div>
                    <a
                      class="btn btn-link pe-3 ps-0 mb-0 ms-auto text-dark"
                      href=""
                    >
                      Reply
                    </a>
                  </li>
                  <li class="list-group-item border-0 d-flex align-items-center px-0 mb-2">
                    <div class="avatar me-3">
                      <img src={P5} alt="kal" class="border-radius-lg shadow rounded-circle" />
                    </div>
                    <div class="d-flex align-items-start flex-column justify-content-center">
                      <h6 class="mb-0 text-sm text-dark">Sherk</h6>
                      <p class="mb-0 text-xs text-dark">
                        Umm.. Not bad I'm still on yesterday project
                      </p>
                    </div>
                    <a
                      class="btn btn-link pe-3 ps-0 mb-0 ms-auto text-dark"
                      href=""
                    >
                      Reply
                    </a>
                  </li>
                  <li class="list-group-item border-0 d-flex align-items-center px-0 mb-2">
                    <div class="avatar me-3">
                      <img src={P6} alt="kal" class="border-radius-lg shadow rounded-circle" />
                    </div>
                    <div class="d-flex align-items-start flex-column justify-content-center">
                      <h6 class="mb-0 text-sm text-dark">Drv</h6>
                      <p class="mb-0 text-xs text-dark">
                        Lorem ipsum dolor sit amet
                      </p>
                    </div>
                    <a
                      class="btn btn-link pe-3 ps-0 mb-0 ms-auto text-dark"
                      href=""
                    >
                      Reply
                    </a>
                  </li>
                  <li class="list-group-item border-0 d-flex align-items-center px-0 mb-2">
                    <div class="avatar me-3">
                      <img src={P7} alt="kal" class="border-radius-lg shadow rounded-circle" />
                    </div>
                    <div class="d-flex align-items-start flex-column justify-content-center">
                      <h6 class="mb-0 text-sm text-dark">Frt</h6>
                      <p class="mb-0 text-xs text-dark">
                        ipsum dolor do eiusmod tempor incididunt ut.
                      </p>
                    </div>
                    <a
                      class="btn btn-link pe-3 ps-0 mb-0 ms-auto text-dark"
                      href=""
                    >
                      Reply
                    </a>
                  </li>
                  <li class="list-group-item border-0 d-flex align-items-center px-0">
                    <div class="avatar me-3">
                      <img src={P8} alt="kal" class="border-radius-lg shadow rounded-circle" />
                    </div>
                    <div class="d-flex align-items-start flex-column justify-content-center">
                      <h6 class="mb-0 text-sm text-dark">Erra</h6>
                      <p class="mb-0 text-xs text-dark">
                        Lorem ipsum dolor sit amet,
                      </p>
                    </div>
                    <a
                      class="btn btn-link pe-3 ps-0 mb-0 ms-auto text-dark"
                      href=""
                    >
                      Reply
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="col-12 mt-4" id="card_images">
            <div class="card mb-4">
              <div class="card-header pb-0 p-3">
                <h6 class="mb-1 text-dark">Projects</h6>
                <p class="text-sm text-dark">Architects design webapp</p>
              </div>
              <div class="card-body p-3">
                <div class="row">
                  <div class="col-xl-3 col-md-6 mb-xl-0 mb-4">
                    <div class="card card-blog card-plain">
                      <div class="position-relative">
                        <a class="d-block shadow-xl border-radius-xl">
                          <img
                            src={web2022}
                            alt="img-blur-shadow"
                            class="img-fluid shadow border-radius-xl"
                          />
                        </a>
                      </div>
                      <div class="card-body px-1 pb-0">
                        <p class="text-gradient text-dark mb-2 text-sm text-dark">
                          Project #2
                        </p>
                        <a href="">
                          <h5 className="text-dark">Modern</h5>
                        </a>
                        <p class="mb-4 text-sm text-dark">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </p>
                        <div class="d-flex align-items-center justify-content-between">
                          <button
                            type="button"
                            class="btn btn-outline-primary btn-sm mb-0 text-dark"
                          >
                            View Project
                          </button>
                          <div class="avatar-group mt-2">
                            <a
                              href=""
                              class="avatar avatar-xs rounded-circle"
                              data-bs-toggle="tooltip"
                              data-bs-placement="bottom"
                              title="Elena Morison"
                            >
                              <img alt="" src="img/p7.jpg" />
                            </a>
                            <a
                              href=""
                              class="avatar avatar-xs rounded-circle"
                              data-bs-toggle="tooltip"
                              data-bs-placement="bottom"
                              title="Nick Daniel"
                            >
                              <img alt="" src="img/activity.svg" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-3 col-md-6 mb-xl-0 mb-4">
                    <div class="card card-blog card-plain">
                      <div class="position-relative">
                        <a class="d-block shadow-xl border-radius-xl">
                          <img
                            src={web}
                            alt=""
                            class="img-fluid shadow border-radius-lg"
                          />
                        </a>
                      </div>
                      <div class="card-body px-1 pb-0">
                        <p class="text-gradient text-dark mb-2 text-sm text-dark">
                          Project #1
                        </p>
                        <a href="">
                          <h5 className="text-dark">Lorem ipsum dolor sit</h5>
                        </a>
                        <p class="mb-4 text-sm text-dark">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </p>
                        <div class="d-flex align-items-center justify-content-between">
                          <button
                            type="button"
                            class="btn btn-outline-primary btn-sm mb-0 text-dark"
                          >
                            View Project
                          </button>
                          <div class="avatar-group mt-2">
                            <a
                              href=""
                              class="avatar avatar-xs rounded-circle"
                              data-bs-toggle="tooltip"
                              data-bs-placement="bottom"
                              title="Nick Daniel"
                            >
                              <img alt="" src="img/web2022.png" />
                            </a>
                            <a
                              href=""
                              class="avatar avatar-xs rounded-circle"
                              data-bs-toggle="tooltip"
                              data-bs-placement="bottom"
                              title="Peterson"
                            >
                              <img alt="Image placeholder" src="img/p1.jpg" />
                            </a>
                            <a
                              href=""
                              class="avatar avatar-xs rounded-circle"
                              data-bs-toggle="tooltip"
                              data-bs-placement="bottom"
                              title="Elena Morison"
                            >
                              <img alt="Image placeholder" src="img/p2.jpg" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-3 col-md-6 mb-xl-0 mb-4">
                    <div class="card card-blog card-plain">
                      <div class="position-relative">
                        <a class="d-block shadow-xl border-radius-xl">
                          <img
                            src={webapp}
                            alt="img-blur-shadow"
                            class="img-fluid shadow border-radius-xl"
                          />
                        </a>
                      </div>
                      <div class="card-body px-1 pb-0">
                        <p class="text-gradient text-dark mb-2 text-sm">
                          Project #3
                        </p>
                        <a href="">
                          <h5 className="text-dark">Minimalist</h5>
                        </a>
                        <p class="mb-4 text-sm text-dark">
                          Different people have different taste, and various
                          types of music.
                        </p>
                        <div class="d-flex align-items-center justify-content-between">
                          <button
                            type="button"
                            class="btn btn-outline-primary btn-sm mb-0 text-dark"
                          >
                            View Project
                          </button>
                          <div class="avatar-group mt-2">
                            <a
                              href=""
                              class="avatar avatar-xs rounded-circle"
                              data-bs-toggle="tooltip"
                              data-bs-placement="bottom"
                              title="Peterson"
                            >
                              <img alt="" src="" />
                            </a>
                            <a
                              href=""
                              class="avatar avatar-xs rounded-circle"
                              data-bs-toggle="tooltip"
                              data-bs-placement="bottom"
                              title="Nick Daniel"
                            >
                              <img alt="" src="" />
                            </a>
                            <a
                              href=""
                              class="avatar avatar-xs rounded-circle"
                              data-bs-toggle="tooltip"
                              data-bs-placement="bottom"
                              title="Ryan Milly"
                            >
                              <img alt="" src="" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-3 col-md-6 mb-xl-0 mb-4">
                    <div class="card h-100 card-plain border">
                      <div class="card-body d-flex flex-column justify-content-center text-center">
                        <Link
                          to=""
                          className="dotBrder d-flex align-items-center justify-content-center ripple"
                        >
                          <FaPlus className="addCourse " />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
