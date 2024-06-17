import React from 'react';
import { Modal, Button, Card, Row } from 'react-bootstrap';
import Apple_wallet from "../../assets/images/svg/apple-wallet.svg";
import Samsung_wallet from "../../assets/images/svg/samsung-wallet.svg";
import Google_wallet from "../../assets/images/svg/google_wallet.svg";

interface DownloadCardModalProps {
  show: boolean;
  handleClose: () => void;
}

const DownloadCardModal: React.FC<DownloadCardModalProps> = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton className='border-0'></Modal.Header>
      <Modal.Body className='text-center'>
        <Modal.Title className='fs-24 fw-semibold text-center mb-4 red_ff'>Download Card</Modal.Title>
        <Row>
          <Card className='mb-3 border-0 m-0'>
            <Card.Body className='d-flex justify-content-between align-items-center'>
              <div className='d-flex align-items-center'>
                <img src={Apple_wallet} alt="Apple Wallet" className="me-3" />
                <span className='fs-18 red_ff'>Apple Wallet</span>
              </div>
              <input type="radio" name="wallet" />
            </Card.Body>
          </Card>
          <Card className='mb-3 border-0 m-0'>
            <Card.Body className='d-flex justify-content-between align-items-center'>
              <div className='d-flex align-items-center'>
                <img src={Samsung_wallet} alt="Samsung Wallet" className="me-3" />
                <span className="fs-18 red_ff"> Samsung Wallet</span>
              </div>
              <input type="radio" name="wallet" />
            </Card.Body>
          </Card>
          <Card className='mb-3 border-0 m-0'>
            <Card.Body className='d-flex justify-content-between align-items-center'>
              <div className='d-flex align-items-center'>
                <img src={Google_wallet} alt="Google Wallet" className="me-3" />
                <span className='fs-18 red_ff'>Google Wallet</span>
              </div>
              <input type="radio" name="wallet" />
            </Card.Body>
          </Card>
        </Row>
        <Button variant="primary" className='w-100 mt-3'>Download</Button>
      </Modal.Body>
    </Modal>
  );
};

export default DownloadCardModal;
