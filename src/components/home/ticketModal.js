import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const TicketModal = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header >
        <Modal.Title id="contained-modal-title-vcenter">
          Ticket Details
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="row">
          <div className="col-md-6 mb-3">
            <h5>TicketId</h5>
            <p>1</p>
          </div>
          <div className="col-md-6 mb-3">
            <h5>Subject</h5>
            <p>แอร์ไม่เย็น</p>
          </div>
          <div className="col-md-6 mb-3">
            <h5>Customer</h5>
            <p>บางกอก กอกอก</p>
          </div>
          <div className="col-md-6 mb-3">
            <h5>Owner</h5>
            <p>ช่างเก่ง มากมาย</p>
          </div>
          <div className="col-md-6 mb-3">
            <h5>CreatedBy</h5>
            <p>สมศรี สีทอง</p>
          </div>
          <div className="col-md-6 mb-3">
            <h5>CreatedAt</h5>
            <p>2011/04/25</p>
          </div>
          
        </div>
        <div className="mb-3">
<h5>Description</h5>
<p>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
          </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default TicketModal;
