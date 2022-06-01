import { FaPlus } from "react-icons/fa";
import { useState } from "react";
import BootLogo from "../../../app/assets/images/bootstrap.png";
import ReactLogo from "../../../app/assets/images/react.png";
import JsLogo from "../../../app/assets/images/js.png";
import { Link } from "react-router-dom";
import { CourseList } from "../../../app/Courses/CourseList";

const GetCourse = () => {
  // const [searchBook, setSearchBook] = useState([CourseList]);
  const [filteredBook, setfilteredBook] = useState(false);
  let newbtn = CourseList.filter((e) => e.id === 1);
  let bignner = CourseList.filter((e) => e.id === 2);
  let popular = CourseList.filter((e) => e.id === 3);
  function newBtnHadler() {
    setfilteredBook(newbtn);
    console.log(newbtn);
  }
  function BignnerBtnHadler() {
    setfilteredBook(bignner);
    console.log(bignner);
  }
  function PopularBtnHadler() {
    setfilteredBook(newbtn);
    console.log(popular);
  }
  function filterBtn() {}

  return (
    <div className=" justify-content-between ">
      <div className="d-flex justify-content-between mb-2">
        <div>
          <h2 className="font-weight-bold">Availabel Courses </h2>
          <p className="text-warning">Select and Purchase as you like</p>
        </div>

        <div
          class="btn-group h-50 w-50 d-flex shadow"
          role="group"
          aria-label="Basic outlined example"
        >
          <button
            type="button"
            class="btn btn-outline-warning text-white"
            onClick={() => newBtnHadler()}
          >
            New
          </button>
          <button
            type="button"
            class="btn btn-outline-warning text-white"
            onClick={() => BignnerBtnHadler()}
          >
            Bignner
          </button>
          <button
            type="button"
            class="btn btn-outline-warning text-white"
            onClick={() => PopularBtnHadler()}
          >
            Popular
          </button>
        </div>
      </div>

      <div className="ourCourse">
      {CourseList.map((item) => {
          return (
              <div className="coursegrops d-flex flex-column justify-content-between align-items-space-btween shadow-lg bg-dark mb-2 rounded p-4">
               <div className="imgPart">
                 <img src={item.url} alt='' className="w-100 h-50"/>
               </div>
               <div className="descpart p-4">
                 <h5>{item.titel}</h5>
                 <p>{item.dicription}</p>
               </div>
               <div className="d-flex bg-secondary justify-content-between w-100">
                <h5 className="pt-2 ps-2">{item.id}$</h5>
                <button className="btn btn-warning">Add to Cart </button>
               </div>
              </div>
          );
        })}
        </div>
    </div>
  );
};

export default GetCourse;
