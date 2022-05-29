import { useState, useEffect } from "react";
import login from "../../app/assets/images/login.svg";
import cool from "../../app/assets/images/cool.svg";
import Google from "../../app/assets/images/google.png";
import { useParams, useNavigate } from "react-router-dom";

import "./login.css";

const LoginPage = ({ campsiteId }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [roller, setRoller] = useState(false);
  const initialValues = { username: "", email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    return errors;
  };

  let navigate = useNavigate();
  let { username } = useParams();

  function signUpRollerStyles() {
    setRoller(!roller);
  }

  return (
    <>
      <div className="row shadow-lg rounded-circle vw-100 vh-100">
        <div className="col d-none d-xl-block">
          <div
            className={
              roller
                ? "rollerTransition roller d-flex justify-content-end"
                : "roller d-flex"
            }
            id="LoginRoller"
          ></div>

          {roller ? (
            <div
              className=" d-block  position-absolute text-dark"
              id="rollerRight_text"
            >
              <h1>Get start you future dream with us!</h1>
              <h5 className="pt-4 text-center">
                Hey, is this your first time to to visit our website ? If so you
                can sign up here. else you can sign in on the right side.
              </h5>
              
              <img src={login} />
            </div>
          ) : (
            <div
              className=" d-block  position-absolute text-dark"
              id="roller_text"
            >
              <h1>Glad to see you!</h1>
              <h5 className="pt-4 text-center">
                Hey, is this your first time to to visit our website ? If so you
                can sign up here. else you can sign in on the right side.
              </h5>
              
              <img src={cool} />
            </div>
          )}

          <div
            className="position-absolute col container border text-center  d-flex flex-column justify-content-center align-items-center mt-5  px-5 w-50  "
            id="signUpPositioning"
          >
            <div
              className=" pt-5 text-center scroll-none ms-4 mb-3 "
              id="right-cont"
            >
              <h1 className="text-dark bolder">Sign Up</h1>

              <form className="ms-5 ps-5">
                <div className="form-group d-flex text-start">
                  <div>
                    <label for="signupFirsttname" className="text-dark">
                      First Name
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="signupFirsttname"
                      aria-describedby="emailHelp"
                      placeholder="First Name"
                    />
                  </div>
                  <div className="ms-2 ">
                    <label for="signupLasttname" className="text-dark">
                      Last Name
                    </label>
                    <input
                      type="email"
                      className="form-control "
                      id="signupLasttname"
                      aria-describedby="emailHelp"
                      placeholder="Last Name"
                    />
                  </div>
                </div>
                <div className="form-group  text-start">
                  <label for="exampleInputEmail1" className="text-dark">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                  />
                  <small id="emailHelp" className="form-text ">
                    We'll never share your email with anyone else.
                  </small>
                </div>

                <div className="form-group text-start">
                  <label for="exampleInputPassword1" className="text-dark">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Password"
                  />
                </div>

                <p className="text-dark text-start ps-2 ">
                  {" "}
                  Alrady user?{" "}
                  <span
                    role="button"
                    onClick={signUpRollerStyles}
                    className="text-primary"
                  >
                    Login
                  </span>
                </p>

                <div>
                  <button
                    onClick={() => {
                      navigate("/dashboard");
                    }}
                    type="submit"
                    className="btn btn-primary text-white w-100 py-2"
                  >
                    Sing Up
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="signupImage">
            <img className="cool mt-5 pt-5 " src={cool} alt="" />
          </div>
        </div>

        <div
          className="col card container border text-center  d-flex flex-column justify-content-center align-items-center mb-5  px-5 w-50 "
          id="signupSide"
        >
          <div
            className="pb-5 pe-5 text-center  scroll-none  w-10"
            id="right-cont"
          ><h6>
          {Object.keys(formErrors).length === 0 && isSubmit ? (
            <div className="bg-success p-2 mx-3">
              Signed in successfully
            </div>
          ) : (
            <pre className="text-dark">{JSON.stringify(formValues, undefined, 2)}</pre>
          )}
        </h6>
            <h1 className="text-dark bolder">Sign in</h1>

            <form className="needs-validation" onSubmit={handleSubmit}>
              <div className="form-group  text-start">
                <label htmlFor="exampleInputEmail1" className="text-dark">
                  Email address
                </label>
                <input
                  type="text"
                  name="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  value={formValues.email}
                  onChange={handleChange}
                />
                <p className="text-danger">{formErrors.email}</p>
                <small id="emailHelp" className="form-text ">
                  We'll never share your email with anyone else.
                </small>
              </div>
              <div className="form-group text-start">
                <label htmlFor="exampleInputPassword1" className="text-dark">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                  value={formValues.password}
                  onChange={handleChange}
                />
                <p className="text-danger">{formErrors.password}</p>
              </div>
              <p className="text-dark text-start ps-2 ">
                New here?{" "}
                <span
                  role="button"
                  className="text-primary"
                  onClick={signUpRollerStyles}
                >
                  Sign Up
                </span>
              </p>
              <div className=" form-group form-check text-start mt-3 mb-3">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                  required
                />
                <label
                  className="form-check-label text-dark text-sm-white ps-2"
                  id="checkboxLabel"
                  for="exampleCheck1"
                >
                  Remember me
                </label>
              </div>
              <div>
                

                
                <button
                  // onClick={() => {
                  //   navigate("/dashboard");
                  // }}
                  type="submit"
                  className="btn btn-primary text-white w-100 py-2"
                >
                  Sign in
                </button>
              </div>
              <h5 className="text-dark pt-2">Or</h5>
              <div className="google_singin">
                <button className="btn btn-primary mt-3  text-white w-100 py-2">
                 <img src={Google} className='pe-2 mb-1'/> Continue with Google
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
