import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Books } from "../../../app/Books/Books";
import "./resource.css";
const Resources = () => {
  const [searchBook, setSearchBook] = useState([]);
  const [show, setShow] = useState(10);
 
 
  const showMore = () => {
    setShow((event) => event + 5);
  };
  const clearHandler = () => {
    setShow(0);
    return<div>No data </div>
  };

  const classListHandler = () => {
    setShow(0);
    return<div>No data </div>
  };

  return (
    <div className="">
      <h1 className="ps-5 mt-2">Resources</h1>
      <div className="container">
        <div class="input-group ">
          <div class="form-outline w-50 ">
            <input
              type="text"
              id="form1"
              class="form-control py-2"
              placeholder="Search Books here..."
              onChange={(e) => {
                setSearchBook(e.target.value);
              }}
            />
            <label class="form-label text-warning" for="form1">
              Search
            </label>
          </div>

          <button type="button" class="btn seachbtn h-50 px-4 py-2">
            <FaSearch />
          </button>
        </div>
        <div class="booklist grid">
          {Books && Books.filter((value) => {
            if (searchBook == "") {
              return null;
            } else if (
              value.title.toLowerCase().includes(searchBook.toLowerCase())
            ) {
              return value;
            }
          }).map((value, key) => {
            return (
              <div class="booklist grid rounded">
              <div class="item blog ">
                <div class="title p-3">
                  <h4>{value.title}</h4>
                  <p>ISBN: {value.isbn}</p>
                </div>
                <div class="desc d-flex p-3">
                  <img src={value.thumbnailUrl} alt='' />
                  <div className="" id="bookContent">
                    <p className="text-white">
                    {value.shortDescription}{" "}
                  </p>
                  <div className="d-flex" >
                    <p className="w-50 h-50">{value.authors}</p>
                    <button className="btn btn-warning h-50">Add to Cart</button>
                  </div>
                  </div>
                  
                </div>
              </div></div>
            );
          })}
        
          {Books && Books.slice(0, show).map((value) => {
            return (<>
            
              <div class="booklist grid rounded">
              <div class="item blog ">
                <div class="title p-3">
                  <h4>{value.title}</h4>
                  <p>ISBN: {value.isbn}</p>
                </div>
                <div class="desc d-flex p-3">
                  <img src={value.thumbnailUrl} alt='' />
                  <div className="" id="bookContent">
                    <p className="text-white">
                    {value.shortDescription}{" "}
                  </p>
                  <div className="d-flex justify-content-between align-items-end" >
                    <p className="w-50 h-50">{value.authors}</p>
                    <button className="btn btn-warning h-50 mb-3">Start Read..</button>
                  </div>
                  </div>
                  
                </div>
              </div></div></>
            );
          })}
        </div>
        <div className=''>
          <button className="btn btn-secondary px-4 me-4 my-5" id="listcontrol" onClick={showMore}>
          Load more..
        </button>
        <button className="btn btn-secondary px-5" id="listcontrol" onClick={clearHandler}>
          Clear
        </button>
        </div>
        

        
      </div>
    </div>
  );
};

export default Resources;
