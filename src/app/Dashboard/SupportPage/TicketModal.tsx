<<<<<<< HEAD
import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import pdf from "../../../../public/assets/images/svg/pdf.svg";
import cross from "../../../../public/assets/images/cross.svg";
import Image from 'next/image';
=======
import React, { useRef, useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import pdf from "../../../../public/assets/images/svg/pdf.svg";
import cross from "../../../../public/assets/images/cross.svg";
import Image from "next/image";
>>>>>>> 8815177228546d8faa723487948ab554a9e3dd6d
interface TicketModalProps {
  show: boolean;
  handleClose: () => void;
}

const TicketModal: React.FC<TicketModalProps> = ({ show, handleClose }) => {
  const [attachment, setAttachment] = useState<File | null>(null);
<<<<<<< HEAD
=======
  const fileInputRef = useRef<HTMLInputElement>(null);
>>>>>>> 8815177228546d8faa723487948ab554a9e3dd6d

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setAttachment(e.target.files[0]);
    }
  };

  const handleRemoveAttachment = () => {
    setAttachment(null);
  };

<<<<<<< HEAD
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title className='dashboard-text-color  border-0 '>Raise Ticket</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="name">
         
            <div className="d-flex gap-2">
              <div>

            <Form.Label>First Name </Form.Label>
              <Form.Control type="text" placeholder="First Name" className="me-2" />
              </div>
 <div>
  
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" placeholder="Last Name" />
 </div>
=======
  const handleUploadClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };
  return (
    <Modal show={show} centered onHide={handleClose}>
      <Modal.Header className="border-0" closeButton>
        <Modal.Title className="dashboard-text-color  border-0 ">
          Raise Ticket
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="border-0 pt-0">
        <Form>
          <Form.Group className="mb-3" controlId="name">
            <div className="d-flex gap-2">
              <div>
                <Form.Label>First Name </Form.Label>
                <Form.Control type="text" className="me-2" />
              </div>
              <div>
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" />
              </div>
>>>>>>> 8815177228546d8faa723487948ab554a9e3dd6d
            </div>
          </Form.Group>

          <Form.Group className="mb-3" controlId="issue">
<<<<<<< HEAD
        <Form.Label>Issue</Form.Label>
        <Form.Select aria-label="Select issue">
          <option>Select an issue type</option>
          <option value="bug">Bug</option>
          <option value="feature">Feature Request</option>
          <option value="other">Other</option>
        </Form.Select>
      </Form.Group>

          <Form.Group className="mb-3" controlId="message">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="Describe your issue" />
=======
            <Form.Label>Issue</Form.Label>
            <Form.Select aria-label="Select issue">
              <option>Select an issue type</option>
              <option value="bug">Bug</option>
              <option value="feature">Feature Request</option>
              <option value="other">Other</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3" controlId="message">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={3} />
>>>>>>> 8815177228546d8faa723487948ab554a9e3dd6d
          </Form.Group>

          <Form.Group controlId="attachment" className="mb-3">
            <Form.Label>Attachment</Form.Label>
<<<<<<< HEAD
            <div className="d-flex align-items-center">
              {attachment ? (
                <div className="attachment d-flex align-items-center">
                  <Image src={pdf} alt="Attachment Icon" style={{ height: "28px", width: "20px" }} />
                  <span className='px-2'>
                    <p className='m-0 p-0 fs-13 fw-light red_ff '>Issue Screenshot</p>
                    <p className='m-0 p-0 fs-13 fw-light red_ff '>{(attachment.size / 1024).toFixed(2)} KB</p>
                  </span>
                  <Button variant="link" className='ps-2' onClick={handleRemoveAttachment}>
                    <Image src={cross} alt="" style={{ height: "16px", width: "16px" }} />
                  </Button>
                </div>
              ) : (
                <Form.Control type="file" onChange={handleFileChange} />
              )}
            </div>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Raise Ticket
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
=======
            <input
              type="file"
              ref={fileInputRef}
              style={{ display: "none" }}
              onChange={handleFileChange}
              accept=".png, .jpeg, .pdf"
            />
            <button
              type="button"
              className="w-100 file_btn mb-3 py-2 rounded-3 border-0 red_ff text-white"
              onClick={handleUploadClick}
            >
              Upload .png, .jpeg, .pdf
            </button>
            <button
              className=" w-100 bg-primary py-3 rounded-3 border-0 red_ff text-white"
              onClick={handleClose}
            >
              Raise Ticket
            </button>
          </Form.Group>
        </Form>
      </Modal.Body>
    </Modal>
  );
};
>>>>>>> 8815177228546d8faa723487948ab554a9e3dd6d

export default TicketModal;
