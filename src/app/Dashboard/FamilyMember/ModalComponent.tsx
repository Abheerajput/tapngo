import React from 'react';
import { Modal, Button, Form, Row } from 'react-bootstrap';
import Apple_wallet from "../../../../public/assets/images/svg/apple-wallet.svg";
import Samsung_wallet from "../../../../public/assets/images/svg/samsung-wallet.svg";
import Google_wallet from "../../../../public/assets/images/svg/google_wallet.svg";
import exclamation from "../../../../public/assets/images/svg/exclamation.svg";

interface ModalComponentProps {
  show: boolean;
  handleClose: () => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const ModalComponent: React.FC<ModalComponentProps> = ({ show, handleClose, handleSubmit }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton className='border-0'>
      </Modal.Header>
      <Modal.Body>
        <Modal.Title className='fs-18 red_ff d-flex justify-content-center pb-5 mb-3'>Add Family Member</Modal.Title>
        <Form onSubmit={handleSubmit} className='mx-3'>
          <Form.Group as={Row} className="mb-3" controlId="formCardNumber">
            <Form.Label className='fs-18 red_ff p-0 m-0 pb-2 text-dark'>
              Card Number
            </Form.Label>
            <Form.Control className='py-2' type="text" prefix='verify' />
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="formNameOnCard">
            <Form.Label className='fs-18 red_ff p-0 m-0 pb-2 text-dark'>
              Name on Card
            </Form.Label>
            <Form.Control className='py-2' type="text" placeholder="" />
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="formRelation">
            <Form.Label className='fs-18 red_ff p-0 m-0 pb-2 text'>
              Relation to You
            </Form.Label>
            <Form.Select className='py-2 fw-semibold' aria-label="Select Relation">
              <option className='fw-Semibold'>Son</option>
              <option value="spouse">Spouse</option>
              <option value="child">Child</option>
              <option value="parent">Parent</option>
              <option value="sibling">Sibling</option>
              <option value="other">Other</option>
            </Form.Select>
          </Form.Group>

          <Form.Group as={Row} className="mb-3 d-flex" controlId="formTwoWaySync">
            <Form.Label column sm={4}>
              Two way sync <img src={exclamation} alt="" />
            </Form.Label>
            <div className='d-flex gap-3'>
              <Form.Check
                type="radio"
                label="Yes"
                name="formTwoWaySync"
                id="formTwoWaySyncYes"
              />
              <Form.Check
                type="radio"
                label="No"
                name="formTwoWaySync"
                id="formTwoWaySyncNo"
              />
            </div>
          </Form.Group>

          <Button variant="primary" type="submit" className='w-100 red_ff fs-16'>
            Submit
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default ModalComponent;

