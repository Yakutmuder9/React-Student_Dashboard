import React from "react";

const getCourse = () => {
  return (
    <div className="activity  justify-content-between ">
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
          <button type="button" class="btn btn-outline-warning text-white">
            New
          </button>
          <button type="button" class="btn btn-outline-warning text-white">
            Popular
          </button>
          <button type="button" class="btn btn-outline-warning text-white">
            Bignner
          </button>
        </div>
      </div>

      <div class="row">
        <div class="col-xl-6 mb-4">
          <div class="card">
            <div class="card-body">
              <div class="d-flex justify-content-between align-items-center">
                <div class="d-flex align-items-center">
                  <img
                    src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                    alt=""
                    // style="width: 45px; height: 45px"
                    class="rounded-circle"
                  />
                  <div class="ms-3">
                    <p class="fw-bold mb-1">John Doe</p>
                    <p class="text-muted mb-0">john.doe@gmail.com</p>
                  </div>
                </div>
                <span class="badge rounded-pill badge-success">Active</span>
              </div>
            </div>
            <div class="card-footer border-0 bg-light p-2 d-flex justify-content-around">
              <a
                class="btn btn-link m-0 text-reset"
                href="#"
                role="button"
                data-ripple-color="primary"
              >
                Message<i class="fas fa-envelope ms-2"></i>
              </a>
              <a
                class="btn btn-link m-0 text-reset"
                href="#"
                role="button"
                data-ripple-color="primary"
              >
                Call<i class="fas fa-phone ms-2"></i>
              </a>
            </div>
          </div>
        </div>
        <div class="col-xl-6 mb-4">
          <div class="card">
            <div class="card-body">
              <div class="d-flex justify-content-between align-items-center">
                <div class="d-flex align-items-center">
                  <img
                    src="https://mdbootstrap.com/img/new/avatars/6.jpg"
                    alt=""
                    // style="width: 45px; height: 45px"
                    class="rounded-circle"
                  />
                  <div class="ms-3">
                    <p class="fw-bold mb-1">Alex Ray</p>
                    <p class="text-muted mb-0">alex.ray@gmail.com</p>
                  </div>
                </div>
                <span class="badge rounded-pill badge-primary">Onboarding</span>
              </div>
            </div>
            <div class="card-footer border-0 bg-light p-2 d-flex justify-content-around">
              <a
                class="btn btn-link m-0 text-reset"
                href="#"
                role="button"
                data-ripple-color="primary"
              >
                Message<i class="fas fa-envelope ms-2"></i>
              </a>
              <a
                class="btn btn-link m-0 text-reset"
                href="#"
                role="button"
                data-ripple-color="primary"
              >
                Call<i class="fas fa-phone ms-2"></i>
              </a>
            </div>
          </div>
        </div>
        <div class="col-xl-6 mb-4">
          <div class="card">
            <div class="card-body">
              <div class="d-flex justify-content-between align-items-center">
                <div class="d-flex align-items-center">
                  <img
                    src="https://mdbootstrap.com/img/new/avatars/7.jpg"
                    alt=""
                    // style="width: 45px; height: 45px"
                    class="rounded-circle"
                  />
                  <div class="ms-3">
                    <p class="fw-bold mb-1">Kate Hunington</p>
                    <p class="text-muted mb-0">kate.hunington@gmail.com</p>
                  </div>
                </div>
                <span class="badge rounded-pill badge-warning">Awaiting</span>
              </div>
            </div>
            <div class="card-footer border-0 bg-light p-2 d-flex justify-content-around">
              <a
                class="btn btn-link m-0 text-reset"
                href="#"
                role="button"
                data-ripple-color="primary"
              >
                Message<i class="fas fa-envelope ms-2"></i>
              </a>
              <a
                class="btn btn-link m-0 text-reset"
                href="#"
                role="button"
                data-ripple-color="primary"
              >
                Call<i class="fas fa-phone ms-2"></i>
              </a>
            </div>
          </div>
        </div>
        <div class="col-xl-6 mb-4">
          <div class="card">
            <div class="card-body">
              <div class="d-flex justify-content-between align-items-center">
                <div class="d-flex align-items-center">
                  <img
                    src="https://mdbootstrap.com/img/new/avatars/3.jpg"
                    alt=""
                    // style="width: 45px; height: 45px"
                    class="rounded-circle"
                  />
                  <div class="ms-3">
                    <p class="fw-bold mb-1">Michael Bale</p>
                    <p class="text-muted mb-0">michael.bale@gmail.com</p>
                  </div>
                </div>
                <span class="badge rounded-pill badge-danger">Removed</span>
              </div>
            </div>
            <div class="card-footer border-0 bg-light p-2 d-flex justify-content-around">
              <a
                class="btn btn-link m-0 text-reset"
                href="#"
                role="button"
                data-ripple-color="primary"
              >
                Message<i class="fas fa-envelope ms-2"></i>
              </a>
              <a
                class="btn btn-link m-0 text-reset"
                href="#"
                role="button"
                data-ripple-color="primary"
              >
                Call<i class="fas fa-phone ms-2"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default getCourse;
