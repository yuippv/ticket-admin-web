import React, { useState } from "react";
import "./create.css";
import Sidebar from "../sidebar/sidebar";

function Create() {
  const [view, setview] = useState(0);

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
          {view === 0 && (
            <div>
              <p style={{ marginTop: 20 }}>Select your ticket type</p>
              <div className="w3-row-padding">
                <div>
                  <a
                    href=""
                    onClick={(e) => {
                      setview(1);
                      e.preventDefault();
                    }}
                  >
                    <div className="w3-half w3-margin-bottom ">
                      <ul className="w3-ul w3-light-grey w3-center w3-hover-blue-grey">
                        <li className="w3-padding-16">
                          <h2>Incident</h2>
                        </li>
                      </ul>
                    </div>
                  </a>
                </div>
                <div>
                  <a
                    href=""
                    onClick={(e) => {
                      setview(2);
                      e.preventDefault();
                    }}
                  >
                    <div className="w3-half w3-margin-bottom">
                      <ul className="w3-ul w3-light-grey w3-center w3-hover-blue-grey">
                        <li className="w3-padding-16">
                          <h2>install</h2>
                        </li>
                      </ul>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          )}
          {view != 0 && (
            <div>
              <p style={{ marginTop: 20 }}>
                Fill out the form to check the equipment information!
              </p>
              <div class="w3-row-padding w3-light-grey">
                <form action="/createinformation" target="_blank">
                  <div className="w3-section text-left">
                    <label>Name</label>
                    <input
                      className="w3-input w3-border"
                      type="text"
                      name="Name"
                      required
                    />
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
                  <button
                    type="submit"
                    className="w3-button w3-block w3-padding-large w3-margin-bottom w3-blue-grey "
                  >
                    Next
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Create;
