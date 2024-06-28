import React from "react";
import { Row, Col } from 'react-bootstrap';
import plush_Image from "../../../../public/assets/images/svg/push_icon.svg";
import icon from "../../../../public/assets/images/svg/icon.svg";
import Image from 'next/image';
const Manual = () => {
  return (
    <div>
      <p className="mb-0 fs_14 red_ff fw-normal">
        Please choose the desired amount to recharge your card
      </p>
      <Row className="mt-md-3 mt-1 px-1 gap-3 d-flex flex-nowrap recharge-options">
        <Col xs="auto" className="mt-2 mt-md-0 px-1">
          <div className="card d-flex flex-column align-items-center justify-content-center p-1 recharge-card">
            <span className="fs_18 red_ff fw-normal py-1 px-2">$100</span>
          </div>
        </Col>
        <Col xs="auto" className="mt-2 mt-md-0 px-1">
          <div className="card d-flex flex-column align-items-center justify-content-center p-1 recharge-card">
            <span className="fs_18 red_ff fw-normal py-1 px-2">$200</span>
          </div>
        </Col>
        <Col xs="auto" className="mt-2 mt-md-0 px-1">
          <div className="card d-flex flex-column align-items-center justify-content-center p-1 recharge-card">
            <span className="fs_18 red_ff fw-normal py-1 px-2">$500</span>
          </div>
        </Col>
        <Col xs="auto" className="mt-2 mt-md-0 px-1">
          <div className="card d-flex flex-column align-items-center justify-content-center p-1 recharge-card">
            <span className="fs_18 red_ff fw-normal py-1 px-2">$1000</span>
          </div>
        </Col>
        <Col xs="auto" className="mt-2 mt-md-0 px-1">
          <div className="card d-flex flex-column align-items-center justify-content-center p-1 recharge-card">
            <span className="fs_18 red_ff py-1 px-2">Custom</span>
          </div>
        </Col>
      </Row>

      <div className="card p-4 mt-3">
        <div className="d-md-flex align-items-center justify-content-between">
          <h5 className="mb-3 mb-md-0 fs_20 fw-semibold red_ff">
            Balance After Recharge
          </h5>
          <span className="bg_yellow px-2 py-1">20% Extra Credit</span>
        </div>
        <Row className="mt-md-4 mt-2">
          <Col md={3} xs={6} className="mt-2 mt-md-0 position-relative px-1">
            <span style={{ cursor: "pointer" }}>
              <Image
                width={30}
                className="position-absolute pulsh_img z_index"
                src={plush_Image}
                alt="plush_image"
              />
            </span>
            <div className="card card_hight ps-3 py-1 d-flex justify-content-between flex-column">
              <p className="fs_13 red_ff">
                Current <br /> Balance
              </p>
              <h5 className="red_ff fs_18">$00</h5>
            </div>
          </Col>
          <Col md={3} xs={6} className="mt-2 mt-md-0 position-relative px-1">
            <span style={{ cursor: "pointer" }}>
              <Image
                width={30}
                className="position-absolute d-md-block d-none pulsh_img z_index"
                src={plush_Image}
                alt="plush_img"
              />
            </span>
            <div className="card card_hight ps-3 py-1 d-flex justify-content-between flex-column">
              <p className="fs_13 red_ff">
                Current <br /> Balance
              </p>
              <h5 className="red_ff fs_18">$00</h5>
            </div>
          </Col>
          <Col md={3} xs={6} className="mt-2 mt-md-0 position-relative px-1">
            <span style={{ cursor: "pointer" }}>
              <Image
                width={30}
                className="position-absolute pulsh_img z_index"
                src={icon}
                alt="plush_img"
              />
            </span>
            <div className="card card_hight ps-3 py-1 d-flex justify-content-between flex-column">
              <p className="fs_13 red_ff">
                Current <br /> Balance
              </p>
              <h5 className="red_ff fs_18">$00</h5>
            </div>
          </Col>
          <Col md={3} xs={6} className="mt-2 mt-md-0 px-1">
            <div className="card card_hight ps-3 py-1 d-flex justify-content-between flex-column">
              <p className="fs_13 red_ff">
                Current <br /> Balance
              </p>
              <h5 className="red_ff fs_18">$00</h5>
            </div>
          </Col>
        </Row>
      </div>
      <div className="d-flex flex-column justify-content-end">
        <h4 className="fs_20 fw-semibold mt-4 red_ff mb-0">Proceed to Pay</h4>
        <div className="d-flex align-items-center mt-3 justify-content-between">
          <p className="mb-0 fs_16 red_ff">Recharge Value</p>
          <h4 className="mb-0 fs_16 fw-semibold red_ff">$00.00</h4>
        </div>
        <div className="d-flex align-items-center mt-3 justify-content-between text-dark">
          <p className="mb-0 fs_16 red_ff">
            Surcharge :{" "}
            <select className="border-0 bg-white text-dark" name="" id="">
              <option value="Domestic">Domestic</option>
              <option value="Domestic 1">Domestic 1</option>
              <option value="Domestic 2">Domestic 2</option>
              <option value="Domestic 3">Domestic 3</option>
            </select>
          </p>
          <h4 className="mb-0 fs_16 fw-semibold red_ff">$00.00</h4>
        </div>
        <div className="border my-4"></div>
        <div className="d-flex align-items-center mt-3 justify-content-between">
          <p className="mb-0 fs_18 fw-semibold red_ff">Grand Total</p>
          <h4 className="mb-0 fs_16 fw-semibold red_ff">$00.00</h4>
        </div>
        <button className="bg_blue w-100 border-0 py-3 fs_16 red_ff text-white fw-semibold rounded-2 mt-4">
          Pay Now
        </button>
      </div>
    </div>
  );
};

export default Manual;
