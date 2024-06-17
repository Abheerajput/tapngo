
import React, { useState } from 'react';
import { Row, Col, Button, Card, Form } from 'react-bootstrap';
import card from "../../assets/images/svg/card.svg";
import greenball from "../../assets/images/svg/greenball.svg";
import plus from "../../assets/images/svg/plus.svg";
import HDFC_Card from "../../assets/images/svg/HDFC_Card.svg";
import Arrow from "../../assets/images/svg/arrow.svg";
import '../../components/FamilyMember/FamilyMember.css';
import ModalComponent from './ModalComponent';
import DownloadCardModal from './DownloadCardModal';

const FamilyMember = () => {
  const [showDownloadModal, setShowDownloadModal] = useState(false);
  const [showAddMemberModal, setShowAddMemberModal] = useState(false);

  const handleCloseDownloadModal = () => setShowDownloadModal(false);
  const handleShowDownloadModal = () => setShowDownloadModal(true);

  const handleCloseAddMemberModal = () => setShowAddMemberModal(false);
  const handleShowAddMemberModal = () => setShowAddMemberModal(true);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleCloseAddMemberModal();
  };

  return (
    <div className='py-3 px-3 bg-white'>
      <h1 className='pb-2 fw-semibold'>Family Members</h1>
      <Row>
        <Col xs={12} md={3} className='mb-4 m-0'>
          <Card className='border-color d-flex flex-column justify-content-between pb-3 h-100 m-0'>
            <Card.Body className='p-0'>
              <div className='d-flex justify-content-between m-0 p-0 py-3 align-items-center px-3'>
                <p className='fs_20 fw-semibold m-0 p-0'>Cards List</p>
                <img className='custom-plus-width m-0 p-0' src={plus} alt="Add Card" />
              </div>
              <div className='d-flex bg-lightblue p-0 justify-content-between'>
                <div className='ms-2 pt-2'>
                  <p className='fs_20 fw-semibold text-nowrap m-0 pb-1'>Andrew's Card</p>
                  <p className='fs_14 m-0 font-color red_ff'>Personal Card</p>
                  <div className='d-flex align-items-center'>
                    <img src={greenball} alt="Active" />
                    <p className='fs_14 ms-2 p-0 font-color red_ff m-0 d-flex align-items-center'>Active</p>
                  </div>
                </div>
                <div className='text-end pt-4 p-0 m-0'>
                  <img src={card} alt="Card" className='img-fluid' />
                </div>
              </div>
            </Card.Body>
            <Card.Footer className='d-flex px-3 justify-content-center m-0 p-0 border-0 bg-white'>
              <Button className="w-100 red_ff fs_16 rounded-1 text-white py-2 border-0 button-color fw-medium" onClick={handleShowAddMemberModal}>
                Add Family Member
              </Button>
            </Card.Footer>
          </Card>
        </Col>

        <Col xs={12} md={6} className='mb-4'>
          <Card className='border-color d-flex flex-column justify-content-between h-100 p-0 m-0'>
            <Card.Body className='p-0'>
              <div className='d-flex justify-content-between m-0 p-0 pt-2 align-items-center px-3'>
                <p className='fs_20 fw-semibold m-0'>Analytics</p>
                <Button className='red_ff fs_16 rounded-1 text-white py-2 px-3 border-0 button-color fw-medium' onClick={handleShowDownloadModal}>
                  Download Card
                </Button>
              </div>
              <hr />
              <div className='d-flex pt-2 bg-white px-3 justify-content-between flex-wrap'>
                <div className='mb-4 red_ff'>
                  <p className='fs_20 fw-semibold red_ff m-0 pb-3'>Overview</p>
                  <p className='fs_14 m-0 font-color red_ff'>Current Balance</p>
                  <p className='fs_32 mb-4 fw-semibold red_ff'>$12345.00</p>
                  <div className='d-flex red_ff align-items-center gap-3 flex-wrap'>
                    <div>
                      <p className='m-0 font-color red_ff'>Lifetime Credit Used</p>
                      <p className='fs_18 fw-semibold mt-1 red_ff'>$1000000.00</p>
                    </div>
                    <div>
                      <p className='m-0 font-color red_ff'>Account Type</p>
                      <p className='fs_18 fw-semibold mt-1 red_ff'>Prepaid</p>
                    </div>
                  </div>
                </div>
                <div className='text-end p-0 m-0'>
                  <img className="mb-3 img-fluid" src={HDFC_Card} alt="Card" />
                </div>
              </div>
              <hr />
              <div>
                <p className='ps-3 fs_20 fw-semibold red_ff'>Card Details</p>
                <div className='d-flex align-items-center px-3 gap-3 justify-content-between flex-wrap'>
                  <div>
                    <p className='m-0 fs_14 font-color'>Card Number</p>
                    <p className='fs_18 fw-semibold mt-1 red_ff'>1234 5678 0123 4567</p>
                  </div>
                  <div>
                    <p className='m-0 fs_14 font-color'>Name on Card</p>
                    <p className='fs_18 fw-semibold mt-1 red_ff'>Andrew James</p>
                  </div>
                  <div>
                    <p className='m-0 fs_14 font-color'>Card Type</p>
                    <p className='fs_18 fw-semibold mt-1 red_ff'>Physical</p>
                  </div>
                  <div>
                    <p className='m-0 fs_14 font-color'>Issued On</p>
                    <p className='fs_18 fw-semibold mt-1 red_ff'>02/24</p>
                  </div>
                </div>
              </div>
            </Card.Body>
            <Card.Footer className='d-flex justify-content-end gap-3 mt-5 pt-5 flex-wrap bg-white border-0'>
              <Button className='w-40 top-up-button my-3 mx-3 red_ff fs_16'>Top-Up Card</Button>
              <Button className='w-40 top-up-button my-3 mx-3 red_ff fs_16'>Manage card</Button>
            </Card.Footer>
          </Card>
        </Col>

        <Col xs={12} md={3} className='mb-4'>
          <Card className='border-color d-flex flex-column h-100 p-0 m-0 bg-white'>
            <Card.Body className='p-0'>
              <div className='p-0 pt-3 px-3'>
                <p className='fs_20 fw-semibold m-0'>Card Preferences</p>
              </div>
              <hr />
              <p className='px-3 fs_18 pb-3 fw-semibold m-0'>Color</p>
              <div className='d-flex justify-content-evenly'>
                <span className='circle bg-0 rounded-circle d-flex justify-content-center align-content-center text-wrap'>
                <div className='d-flex'>

                  <img src={Arrow} alt="" />
                </div>
                </span>
                <span className='circle bg-1 rounded-circle'></span>
                <span className='circle bg-2 rounded-circle'></span>
                <span className='circle bg-3 rounded-circle'></span>
                <span className='circle bg-4 rounded-circle'></span>
              </div>
              <div className='d-flex gap-3 ps-3 pt-2'>
                <span className='circle bg-5 rounded-circle'></span>
                <span className='circle bg-6 rounded-circle'></span>
              </div>
              <hr />
              <div className='px-3'>
                <p className='fs_18 fw-semibold red_ff'>Name on Card</p>
                <Form.Select className="red_ff" aria-label="Default select example">
                  <option>Select Preference</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <ModalComponent show={showAddMemberModal} handleClose={handleCloseAddMemberModal} handleSubmit={handleSubmit} />
      <DownloadCardModal show={showDownloadModal} handleClose={handleCloseDownloadModal} />
    </div>
  );
};

export default FamilyMember;
