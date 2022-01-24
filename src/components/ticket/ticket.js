import React, { Component } from "react";
import "./ticket.css";
import Sidebar from "../sidebar/sidebar";

function Ticket() {
    return (
      <div>
        <Sidebar />
        {/* Top menu on small screens */}
        <header className="w3-container w3-top w3-hide-large w3-blue-grey w3-xlarge w3-padding">
          <a
            href="javascript:void(0)"
            className="w3-button w3-blue-grey w3-margin-right"
            onclick="w3_open()"
          >
            ☰
          </a>
          <span>Company Name</span>
        </header>
        {/* Overlay effect when opening sidebar on small screens */}
        <div
          className="w3-overlay w3-hide-large"
          onclick="w3_close()"
          style={{ cursor: "pointer" }}
          title="close side menu"
          id="myOverlay"
        />
        {/* !PAGE CONTENT! */}
        <div className="w3-main" style={{ marginLeft: 340, marginRight: 40 }}>
          {/* Header */}
          <div className="w3-container" style={{ marginTop: 80 }} id="servicemaintain">
            <h1 className="w3-jumbo w3-text-dark-grey">
              <b>Services Maintainance </b>
            </h1>
          </div>
          
          {/* Tickets */}
          <div className="w3-container" id="ticket" style={{ marginTop: 20 }}>
            <h1 className="w3-xxxlarge w3-text-blue-grey">
              <b>Tickets</b>
            </h1>
            <hr
              style={{ width: 120, border: "5px solid grey" }}
              className="w3-round"
            />
            <p>
              We are a interior design service that focus on what's best for
              your home and what's best for you!
            </p>
            <div className="w3-row-padding">
            <div className="w3-margin-bottom">
              <table style={{width:'100%'}}>
                <thead className="w3-table w3-blue-grey w3-center">
                    <tr>
                      <th className="w3-center">
                        EndUser
                      </th>
                      <th className="w3-center">
                        Ticket No.
                      </th>
                      <th className="w3-center">
                        Serial No.
                      </th>
                      <th className="w3-center">
                        Subject
                      </th>
                      <th className="w3-center">
                        Techinician
                      </th>
                      <th className="w3-center">
                        Status
                      </th>
                      <th className="w3-center">
                        Details
                      </th>
                    </tr>
                </thead>
                <tbody className="w3-table w3-light-grey w3-center">
                    <tr>
                      <td className="w3-center">
                        ddd
                      </td>
                      <td className="w3-center">
                        ddddd
                      </td>
                      <td className="w3-center">
                        dxdd
                      </td>
                      <td className="w3-center">
                        dxdd
                      </td>
                      <td className="w3-center">
                        dsdd
                      </td>
                      <td className="w3-center">
                        dwdd
                      </td>
                      <td className="w3-center">
                        xs
                      </td>
                    </tr>
                </tbody>
              </table>
              {/* <ul >
                <li className="w3-dark-grey w3-xlarge w3-padding-32">Basic</li>
                <li className="w3-padding-16">Floorplanning</li>
                <li className="w3-padding-16">10 hours support</li>
                <li className="w3-padding-16">Photography</li>
                <li className="w3-padding-16">20% furniture discount</li>
                <li className="w3-padding-16">Good deals</li>
                <li className="w3-padding-16">
                  <h2>$ 199</h2>
                  <span className="w3-opacity">per room</span>
                </li>
              </ul> */}
            </div>
            </div>
          </div>
          {/* End page content */}
        </div>
        {/* W3.CSS Container */}
        <div
          className="w3-light-grey w3-container w3-padding-32"
          style={{ marginTop: 75, paddingRight: 58 }}
        >
        </div>
      </div>
    );
  
}

export default Ticket;
