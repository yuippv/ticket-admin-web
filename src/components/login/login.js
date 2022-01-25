import React, { Component } from "react";
import "./login.css";

function Login() {
    return(
<section className="login-section">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-md-12 col-lg-10">
        <div className="wrap d-md-flex">
          <div className="text-wrap p-4 p-lg-5 text-center d-flex align-items-center order-md-last w3-blue-grey">
            <div className="text w-100">
              <h2>Welcome to login</h2>
            </div>
          </div>
          <div className="login-wrap p-4 p-lg-5">
            <div className="d-flex">
              <div className="w-100">
                <h3 className="mb-4">Sign In</h3>
              </div>
            </div>
            <form action="#" className="signin-form">
              <div className="form-group mb-3">
                <label className="label" htmlFor="name">Username</label>
                <input type="text" className="form-control" placeholder="Username" required />
              </div>
              <div className="form-group mb-3">
                <label className="label" htmlFor="password">Password</label>
                <input type="password" className="form-control" placeholder="Password" required />
              </div>
              <div className="form-group">
                <button type="submit" className="form-control btn btn-primary submit px-3">Sign In</button>
              </div>
              <br />
              <div className="form-group d-md-flex">
                <div className="w-50 text-left">
                  <div className="checkbox-wrap checkbox-primary mb-0">Remember Me
                    <input type="checkbox" defaultChecked />
                    <span className="checkmark" />
                  </div>
                </div>
                <div className="w-50 text-right">
                  <a href="#">Forgot Password</a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    )
}

export default Login;