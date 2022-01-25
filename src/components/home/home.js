import React, { Component, useEffect, useState } from "react";
import "./home.css";
import Sidebar from "../sidebar/sidebar";
import $ from "jquery";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import TicketModal from "./ticketModal";
$.DataTable = require("datatables.net");

function Home(){

  useEffect(() => {
    $(document).ready(function () {
      $("#example").DataTable();
    });
  });

    const [modalShow, setModalShow] = useState(false);

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
          <span>ENIXER</span>
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
              <b>Services Maintainance</b>
            </h1>
          </div>
          <TicketModal show={modalShow} onHide={() => setModalShow(false)} />
          {/* Tickets */}
          <div className="w3-container" id="tickets" style={{ marginTop: 20 }}>
            <h1 className="w3-xxxlarge w3-text-blue-grey">
              <b>Tickets</b>
            </h1>
            <div class="row">
              <div class="col-10">
                <hr
                  style={{ width: "100%", border: "5px solid grey" }}
                  className="w3-round"
                />
              </div>
              <div class="col-2">
                <a href="/create">
                  <button type="button" class="btn btn-light w3-blue-grey">
                    Create Ticket
                  </button>
                </a> 
              </div>
            </div>
            <br />
            <div className="w3-row-padding">
            <div className="w3-margin-bottom">
            <div className="card-body">
          <div className="table-responsive">
            <table id="example" className="display" style={{ width: "100%" }}>
              <thead>
                <tr>
                  <th>TicketId</th>
                  <th>Subject</th>
                  <th>Customer</th>
                  <th>Owner</th>
                  <th>CreatedBy</th>
                  <th>CreatedAt</th>
                  <th>Status</th>
                  <th></th>
                </tr>
              </thead>
              <tbody className="text-dark">
                <tr>
                  <td>1</td>
                  <td>แอร์ไม่เย็น</td>
                  <td>บางกอก กอกอก</td>
                  <td>ช่างเก่ง มากมาย</td>
                  <td>สมศรี สีทอง</td>
                  <td>2011/04/25</td>
                  <td>
                    <span
                      className="badge bg-secondary"
                      style={{ color: "white" }}
                    >
                      New
                    </span>
                  </td>
                  <td>
                    {" "}
                    <Button
                      variant="primary"
                      onClick={() => setModalShow(true)}
                    >
                      Details
                    </Button>
                  </td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  {/* <th>TicketId</th>
                <th>Subject</th>
                  <th>Customer</th>
                  <th>Owner</th>
                  <th>CreatedBy</th>
                  <th>CreatedAt</th>
                  <th>Status</th> */}
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
              {/* <table style={{width:'100%'}}>
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
              </table> */}
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

export default Home;
