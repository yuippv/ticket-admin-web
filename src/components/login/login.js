import React, { Component } from "react";
import "./login.css";

function Login() {
    return(
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-md-6 text-center mb-5">
        <h2 className="heading-section">Login #07</h2>
      </div>
    </div>
    <div className="row justify-content-center">
      <div className="col-md-12 col-lg-10">
        <div className="wrap d-md-flex">
          <div className="text-wrap p-4 p-lg-5 text-center d-flex align-items-center order-md-last">
            <div className="text w-100">
              <h2>Welcome to login</h2>
              <p>Don't have an account?</p>
              <a href="#" className="btn btn-white btn-outline-white">Sign Up</a>
            </div>
          </div>
          <div className="login-wrap p-4 p-lg-5">
            <div className="d-flex">
              <div className="w-100">
                <h3 className="mb-4">Sign In</h3>
              </div>
              <div className="w-100">
                <p className="social-media d-flex justify-content-end">
                  <a href="#" className="social-icon d-flex align-items-center justify-content-center"><span className="fa fa-facebook" /></a>
                  <a href="#" className="social-icon d-flex align-items-center justify-content-center"><span className="fa fa-twitter" /></a>
                </p>
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
              <div className="form-group d-md-flex">
                <div className="w-50 text-left">
                  <label className="checkbox-wrap checkbox-primary mb-0">Remember Me
                    <input type="checkbox" defaultChecked />
                    <span className="checkmark" />
                  </label>
                </div>
                <div className="w-50 text-md-right">
                  <a href="#">Forgot Password</a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
    )
}

export default Login;