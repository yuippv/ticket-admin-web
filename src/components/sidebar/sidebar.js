import React, { Component } from "react";
import "./sidebar.css";


function Sidebar() {
      return (
        <div>
        <nav
          className="w3-sidebar w3-blue-grey w3-collapse w3-top w3-large w3-padding"
          style={{ zIndex: 3, width: 300, fontWeight: "bold" }}
          id="mySidebar"
        >
          <br />
          <a
            href="javascript:void(0)"
            onclick="w3_close()"
            className="w3-button w3-hide-large w3-display-topleft"
            style={{ width: "100%", fontSize: 22 }}
          >
            Close Menu
          </a>
          <div className="w3-container">
            <h3 className="w3-padding-64">
              <b>
                ENIXER
                <br />
              </b>
            </h3>
          </div>
          <div className="w3-bar-block">
            <a
              href="#"
              onclick="w3_close()"
              className="w3-bar-item w3-button w3-hover-white"
            >
              Tickets List
            </a>
            <a
              href="#task"
              onclick="w3_close()"
              className="w3-bar-item w3-button w3-hover-white"
            >
              Tasks
            </a>
            <a
              href="#logout"
              onclick="w3_close()"
              className="w3-bar-item w3-button w3-hover-white"
            >
              Logout
            </a>
          </div>
        </nav>
    </div>
    )
}

export default Sidebar;
