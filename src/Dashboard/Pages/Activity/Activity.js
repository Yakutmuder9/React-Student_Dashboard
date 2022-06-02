import "./activity.css";
import { FaPlus } from "react-icons/fa";
import BootLogo from "../../../app/assets/images/bootstrap.png";
import ReactLogo from "../../../app/assets/images/react.png";
import JsLogo from "../../../app/assets/images/js.png";
import {Link} from 'react-router-dom';
import  SpinnChart  from "./SpinnChart";

const Activity = () => {
  return (
    <div className="activity  justify-content-between ">
      

      
      <div className="courseInProgress ">
        <div className="courseInProgressone d-flex justify-content-between">
          <div class="cardLogo text-dark me-3">
            <h5 class=" text-dark">Bootstrap</h5>
            <h4 class=" text-dark">
              221 Project <span class=" text-success">+95%</span>
            </h4>
            <progress id="file" max="100" value="95" className="">
              {" "}
              95%{" "}
            </progress>
          </div>
          <div class="cardLogo text-right ">
            <img src={BootLogo} class="w-100 h-100 p-2" alt="" />
          </div>
        </div>

        <div className="courseInProgressone d-flex d-flex justify-content-between">
          <div class="cardLogo text-dark">
            <h5 class=" text-dark">JavaScript</h5>
            <h4 class=" text-dark">
              125 Project <span class=" text-success">+85%</span>
            </h4>
            <progress id="file" max="100" value="70" className="">
              {" "}
              70%{" "}
            </progress>
          </div>
          <div class="cardLogo">
            <img src={JsLogo} class="w-100 h-100 p-2 rounded" alt="" />
          </div>
        </div>
        <div className="courseInProgressone d-flex d-flex justify-content-between">
          <div class="cardLogo text-dark">
            <h5 class=" text-dark">React JS</h5>
            <h4 class=" text-dark">
              54 Project <span class=" text-success">+35%</span>
            </h4>
            <progress id="file" max="100" value="35" className="">
              {" "}
              35%{" "}
            </progress>
          </div>
          <div class="cardLogo">
            <img src={ReactLogo} class="w-100 h-100 p-2" alt="" />
          </div>
        </div>

        <div className="courseInProgressone d-flex align-items-center justify-content-center">
          <Link to='getCourse' className="dotBrder d-flex align-items-center justify-content-center ripple" >
            <FaPlus className="addCourse " />
          </Link>
        </div>
        
      </div>
      
      <div class="row mt-4">
          <div class="col-lg-7 mb-lg-0 mb-4">
            <div class="card">
              <div class="card-body p-3">
                <div class="row">
                  <div class="col-lg-6">
                    <div class="d-flex flex-column h-100 text-dark">
                      <p class="mb-1 pt-2 text-bold text-dark">Built by developers</p>
                      <h5 class="font-weight-bolder ">Weekly Community Projects</h5>
                      <p class="mb-5 text-dark">
                        From colors, cards, typography to complex elements, you
                        will find the full documentation.
                      </p>
                      <a class="text-body text-sm font-weight-bold mb-0 icon-move-right mt-auto" href="javascript:;">
                        Read More
                        <i class="fas fa-arrow-right text-sm ms-1" aria-hidden="true"></i>
                      </a>
                    </div>
                  </div>
                  <div class="col-lg-5 ms-auto text-center mt-5 mt-lg-0">
                    <div class="bg-gradient-primary border-radius-lg h-100">
                      <img src={BootLogo} class="w-50 h-100 top-0 d-lg-block d-none"
                        alt="waves" id="bootlogo"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-5">
            <div class="card h-100 p-3 bg-dark"
               id="weeklyProj">
              <div class="overflow-hidden position-relative border-radius-lg h-100">
                <span class="mask bg-gradient-dark"></span>
                <div class="card-body position-relative z-index-1 d-flex flex-column h-100 p-3">
                  <h5 class="text-white font-weight-bolder mb-4 pt-2">
                    Work with the rockets
                  </h5>
                  <p class="text-white">
                    Wealth creation is an evolutionarily recent positive-sum
                    game. It is all about who take the opportunity first.
                  </p>
                  <a class="text-white text-sm font-weight-bold mb-0 icon-move-right mt-auto" href="javascript:;">
                    Read More
                    <i class="fas fa-arrow-right text-sm ms-1" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>









      <SpinnChart />
    </div>
  );
};

export default Activity;
