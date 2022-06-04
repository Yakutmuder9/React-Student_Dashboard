// import "./inbox.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

function Inbox() {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [count, setCount] = useState(1);

  console.log(posts);
  useEffect(() => {
    const loadPost = async () => {
      setLoading(true);
      const response = await axios.get(
        "https://opentdb.com/api.php?amount=15&category=18&difficulty=easy&type=multiple"
      );
      setPosts(response.data.results);
      console.log(response.data.results[0]);

      setLoading(false);
    };
    loadPost();
  }, []);

  const incrementCount = () => {
    if (count < 14) {
      setCount(count + 1);
    } else {
      setCount(1);
    }
  };

  return (
    <>
      <div className="inbox p-4 w-100 vh-60 bg-dark shadow-lg">
        {loading ? (
          <h4 className="">Loading...</h4>
        ) : (
          <div className="container">
            {posts.map((item) => {
              return (
                <div className="position-absolute shadow-lg  bg-dark p-4 mb-4 w-100">
                  <h4>
                    {count} {item.question}
                  </h4>
                  <div className="w-100">
                    <div className="w-100">
                      <button className="btn rounded btn-dark shadow-lg  m-3 p-3">
                        A. {item.incorrect_answers[0]}
                      </button>
                      <button className="btn rounded btn-dark shadow-lg  m-3 p-3">
                        B. {item.incorrect_answers[1]}
                      </button>
                    </div>
                    <div className="w-100">
                      <button className="btn rounded btn-dark shadow-lg  m-3 p-3">
                        C. {item.incorrect_answers[2]}
                      </button>
                      <button className="btn rounded btn-dark shadow-lg  m-3 p-3">
                        D. {item.correct_answer}
                      </button>
                    </div>
                  </div>
                  <button
                    className="btn btn-warning px-4 m-3 "
                    onClick={incrementCount}
                  >
                    Next
                  </button>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}

export default Inbox;
