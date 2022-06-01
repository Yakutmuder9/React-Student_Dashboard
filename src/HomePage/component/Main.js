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

const Home = () => {
  
  return (
    <div className="home">
      <div className="hacking">
        <p>HACKING THE CELL</p>
        <h1>Transfrom your future career with us</h1>
        <div className="learn-more rippleBtn">
          <button className="box ">
            Learn More <AiOutlineCaretRight className="learn-icon" />
          </button>
          <div className="box"></div>
        </div>
      </div>

      <span className="circle-one ">
        <div class="main">
          <img alt="" class="san-center " src={main} id="spinerImg" />
          <div class="item  d-flex justify-content-center p-5 m-5 rounded-circle" id="spinerone">
            <img alt="" src={bootlogo} id="spinerImg" className="rounded-circle"/>
          </div>
          <div class="item  d-flex justify-content-center p-5 m-5 rounded-circle" id="spinertwo">
            <img alt="" src={JSlogo} id="spinerImg" className="rounded-circle"/>
          </div>
          <div class="item  d-flex justify-content-center p-5 m-5 rounded-circle" id="spinerthree">
            <img alt="" src={reactlogo} id="spinerImg" />
          </div>
          <div class="item  d-flex justify-content-center p-5 m-5 rounded-circle" id="spinerfour">
            <img alt="" src={nodelogo} id="spinerImg" />
          </div>
          <div class="item  d-flex justify-content-center p-5 m-5 rounded-circle" id="spinerfive">
            <img alt="" src={vuelogo} />
          </div>
          <div class="item  d-flex justify-content-center p-5 m-5 rounded-circle" id="spinersix">
            <img alt="" src={figmalogo} id="spinerImg" />
          </div>
        </div>
      </span>
    </div>
  );
};

export default Home;
