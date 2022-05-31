import React from "react";
import { AiOutlineCaretRight } from "react-icons/ai";
import main from "../../app/assets/images/Picture1.png";
import bootlogo from "../../app/assets/images/bootstrap.png";
import JSlogo from "../../app/assets/images/js.png";
import reactlogo from "../../app/assets/images/react.png";
import figmalogo from "../../app/assets/images/figma.png";
import nodelogo from "../../app/assets/images/Nodejs.png";
import vuelogo from "../../app/assets/images/Vue.png";
import "./Main.css";
import $ from "jquery";

const Home = () => {
  
  return (
    <div className="home">
      <div className="hacking">
        <p>HACKING THE CELL</p>
        <h1>Transfrom your future career first with us</h1>
        <div className="learn-more rippleBtn">
          <button className="box ">
            Learn More <AiOutlineCaretRight className="learn-icon" />
          </button>
          <div className="box"></div>
        </div>
      </div>

      <span className="circle-one ">
        <div class="main">
          {/* <div className="mainround"></div> */}
          <img class="san-center " src={main} id="spinerImg" />
          <div class="item  d-flex justify-content-center p-5 m-5 rounded-circle" id="spinerone">
            <img src={bootlogo} id="spinerImg" className="rounded-circle"/>
          </div>
          <div class="item  d-flex justify-content-center p-5 m-5 rounded-circle" id="spinertwo">
            <img src={JSlogo} id="spinerImg" className="rounded-circle"/>
          </div>
          <div class="item  d-flex justify-content-center p-5 m-5 rounded-circle" id="spinerthree">
            <img src={reactlogo} id="spinerImg" />
          </div>
          <div class="item  d-flex justify-content-center p-5 m-5 rounded-circle" id="spinerfour">
            <img src={nodelogo} id="spinerImg" />
          </div>
          <div class="item  d-flex justify-content-center p-5 m-5 rounded-circle" id="spinerfive">
            <img src={vuelogo} />
          </div>
          <div class="item  d-flex justify-content-center p-5 m-5 rounded-circle" id="spinersix">
            <img src={figmalogo} id="spinerImg" />
          </div>
        </div>
      </span>
      {/* <div className="circle-one bg-primary"></div> */}

      {/* <img src={main} alt=''/> */}

      {/* <div className="circle-two bg-secondary">
      </div> */}
    </div>
  );
};

export default Home;
