import React from "react";
import "/workspaces/BookStore/src/App.css";
import { Link } from "react-router-dom";
function Register() {
  return (
    <>
      <div className="reg">
        <div class="z mb-5">Personal Information</div>
        <hr></hr>
        <p>please enter the following information to complete your account</p>
        <div className="row">
          <div class="col">
            <label class="form-label">First name</label>
            <input
              type="text"
              class="form-control"
              placeholder=""
              aria-label="First name"
            />
          </div>
          <div class="col">
            <label class="form-label">Last name</label>
            <input
              type="text"
              class="form-control"
              placeholder=""
              aria-label="Last name"
            />
          </div>
        </div>
      </div>
      <h1>Register Component</h1>
      <Link to="/Login">Login</Link>
    </>
  );
}

export default Register;
