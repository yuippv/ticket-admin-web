import React, { Component } from "react";
import Sidebar from "../sidebar/sidebar";
import "./createinformation.css";

function Createinformation() {
  return (
    <div>
      <Sidebar />
      <div className="w3-main" style={{ marginLeft: 340, marginRight: 40 }}>
        {/* Create */}
        <div className="w3-container" id="contact" style={{ marginTop: 80 }}>
          <h1 className="w3-jumbo w3-text-dark-grey">
            <b>Services Maintainance</b>
          </h1>
          <h1 className="w3-xxxlarge w3-text-blue-grey">
            <b>Create</b>
          </h1>
          <hr
            style={{ width: "100%", border: "5px solid grey" }}
            className="w3-round"
          />
          <p style={{ marginTop: 20 }}>
            Fill out the form to check the equipment information!
          </p>
          <div className="w3-row-padding w3-grayscale ">
            <div className="w3-col w3-margin-bottom ">
              <div className="w3-light-grey">
                <div className="w3-container w3-padding-16 text-left">
                  <h4>Customer Name</h4>
                  <p>
                    นางสมศรี สีสมอน
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="w3-row-padding w3-light-grey">
            <form action="/action_page.php" target="_blank">
              <div className="w3-section text-left">
                <label>Subject</label>
                <input
                  className="w3-input w3-border"
                  type="text"
                  name="Subject"
                  required
                />
              </div>
              <div className="w3-section text-left">
                <label>Description</label>
                <textarea
                  className="w3-input w3-border"
                  type="text"
                  name="Name"
                  required
                ></textarea>
              </div>
              <div className="w3-section text-left">
                <label>Tel</label>
                <input
                  className="w3-input w3-border"
                  type="text"
                  name="Tel"
                  required
                />
              </div>
              <div className="w3-section text-left">
                <label>Email</label>
                <input
                  className="w3-input w3-border"
                  type="text"
                  name="Email"
                  required
                />
              </div>
              <div className="w3-section text-left">
                <label>Address</label>
                <textarea
                  className="w3-input w3-border"
                  type="text"
                  name="Address"
                  required
                ></textarea>
              </div>
              <div className="w3-section text-left">
                <label>Serial Number</label>
                <input
                  className="w3-input w3-border"
                  type="text"
                  name="SerialNumber"
                  required
                />
              </div>
              <div className="w3-section text-left">
                <label>Model</label>
                <input
                  className="w3-input w3-border"
                  type="text"
                  name="Model"
                  required
                />
              </div>
              <button
                type="submit"
                className="w3-button w3-block w3-padding-large w3-margin-bottom w3-blue-grey "
              >
                Next
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Createinformation;
