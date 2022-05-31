import "./activity.css";
import { FaPlus } from "react-icons/fa";
import BootLogo from "../../../app/assets/images/bootstrap.png";
import ReactLogo from "../../../app/assets/images/react.png";
import JsLogo from "../../../app/assets/images/js.png";
import {Link} from 'react-router-dom'

const Activity = () => {
  return (
    <div className="activity  justify-content-between ">
      <div className="d-flex justify-content-between mb-2">
        <div>
          <h2 className="font-weight-bold">In Progress.. </h2>
          <p className="text-warning">Your recent courses</p>
        </div>
        <button className="bg-secondary border p-2 h-50">Browse</button>
      </div>
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
            <img src={JsLogo} class="w-100 h-100 p-2" alt="" />
          </div>
        </div>

        <div className="courseInProgressone d-flex d-flex justify-content-between">
          <div class="cardLogo text-dark">
            <h5 class=" text-dark">Bootstrap</h5>
            <h4 class=" text-dark">
              125 Project <span class=" text-success">+85%</span>
            </h4>
            <progress id="file" max="100" value="70" className="">
              {" "}
              70%{" "}
            </progress>
          </div>
          <div class="cardLogo">
            <img src={BootLogo} class="w-100 h-100 p-2" alt="" />
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
    </div>
  );
};

export default Activity;
