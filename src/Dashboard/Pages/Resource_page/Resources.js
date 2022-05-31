import { useState } from "react";
import {FaSearch} from 'react-icons/fa'
import { Books } from "../../../app/Books/Books";

const Resources = () => {
  let maxNumber = Books.length;
  let randomBook = Math.floor(Math.random() * maxNumber + 1);

  console.log(Books[0].isbn);
  console.log(Books.length);

  return (
    <div className="">
      <h2 className="px-2">Resources</h2>
      <div className="container">
        
        <div class="input-group">
          <div class="form-outline">
            <input type="search" id="form1" class="form-control" />
            <label class="form-label" for="form1">
              Search
            </label>
          </div>

          <button type="button" class="btn btn-primary h-50" >
            <FaSearch/>
          </button>
        </div>

        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>No.</th>
              <th>img</th>
              <th>book name, author anddiscription</th>
            </tr>
          </thead>
          <tbody>
            {Books &&
              Books.map((book) => (
                <tr key={book.pageCount}>
                  <td>1</td>
                  <td>
                    {" "}
                    <a href={book.thumbnailUrl}><img src={book.thumbnailUrl} alt="" /></a>
                  </td>
                  <td>
                    Titel: {book.title}
                    <br></br>
                    AUTHOR: {book.authors}
                    <br></br>
                    ISBN: {book.isbn}
                    <br></br>
                    DISCRIPTION: {book.shortDescription}
                    <br></br>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Resources;
