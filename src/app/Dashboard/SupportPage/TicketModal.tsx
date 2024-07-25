import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import pdf from "../../../../public/assets/images/svg/pdf.svg";
import cross from "../../../../public/assets/images/cross.svg";
import Image from 'next/image';
interface TicketModalProps {
  show: boolean;
  handleClose: () => void;
}

const TicketModal: React.FC<TicketModalProps> = ({ show, handleClose }) => {
  const [attachment, setAttachment] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setAttachment(e.target.files[0]);
    }
  };

  const handleRemoveAttachment = () => {
    setAttachment(null);
  };

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
            </div>
          </Form.Group>

          <Form.Group className="mb-3" controlId="issue">
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
          </Form.Group>

          <Form.Group controlId="attachment" className="mb-3">
            <Form.Label>Attachment</Form.Label>
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

export default TicketModal;
