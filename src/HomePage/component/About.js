import React from "react";
import web from '../../app/assets/images/web.png'
import com from '../../app/assets/images/com.jpg'
import sec from '../../app/assets/images/p6.jpg'
import { AiOutlineCaretRight } from "react-icons/ai";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="about-titel">
        <h1>Our Blends..</h1>
        <div className="underline"></div>
      </div>
      <div className="solution-items">
        <div className="solution-first">
          <div className="solution-works">
            <img src={com} alt='' />
          </div>
          <h2>Web App</h2>
          <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident est laborum.
          </p>
          <div className="learn-more">
            <button>
              Learn More <AiOutlineCaretRight className="learn-icon" />
            </button>
          </div>
        </div>
        <div className="solution-second">
          <div className="solution-works">
            
          <img src={web} alt='' />
          </div>
          <h2>Mobile Apps</h2>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua tempor incididunt ut labore et dolore magna aliqua..
          </p>
          <div className="learn-more">
            <button>
              Learn More <AiOutlineCaretRight className="learn-icon" />
            </button>
          </div>
        </div>
        <div className="solution-third">
          <div className="solution-works">
          <img src={sec} alt='' />
          </div>
          <h2>Security</h2>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          </p>
          <div className="learn-more">
            <button>
              Learn More <AiOutlineCaretRight className="learn-icon" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
