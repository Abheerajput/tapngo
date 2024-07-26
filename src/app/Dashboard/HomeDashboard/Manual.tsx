<<<<<<< HEAD
import React from "react";
import { Row, Col } from 'react-bootstrap';
import plush_Image from "../../../../public/assets/images/svg/push_icon.svg";
import icon from "../../../../public/assets/images/svg/icon.svg";
import Image from 'next/image';
const Manual = () => {
=======
import React, { useState } from "react";
import { Row, Col, Card } from "react-bootstrap";
import plush_Image from "../../../../public/assets/images/svg/push_icon.svg";
import icon from "../../../../public/assets/images/svg/icon.svg";
import Image from "next/image";
type AmountOption = {
  label: string;
  value: string;
};

const Manual = () => {
  const rechargeAmounts: AmountOption[] = [
    { label: "$100", value: "100" },
    { label: "$200", value: "200" },
    { label: "$500", value: "500" },
    { label: "$1000", value: "1000" },
    { label: "Custom", value: "custom" },
  ];

  const [selectedAmount, setSelectedAmount] = useState<string | null>(null);
  const [selectedTrigger, setSelectedTrigger] = useState<string | null>(null);

  const handleAmountClick = (value: string) => {
    setSelectedAmount(value);
  };

  const handleTriggerClick = (value: string) => {
    setSelectedTrigger(value);
  };

>>>>>>> 8815177228546d8faa723487948ab554a9e3dd6d
  return (
    <div>
      <p className="mb-0 fs_14 red_ff mb-2 dashboard-text-color fw-normal">
        Please choose the desired amount to recharge your card
      </p>
<<<<<<< HEAD
      <Row className="mt-md-3 mt-1 px-1 gap-3 d-flex flex-nowrap recharge-options">
        <Col xs="auto" className="mt-2 mt-md-0 px-1 rounded-2">
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
          <h5 className="mb-3 mb-md-0 fs_20 dashboard-text-color fw-semibold red_ff">
            Balance After Recharge
          </h5>
          <span className="bg_yellow px-2 py-1 rounded-2">20% Extra Credit</span>
=======
      <Row className="mt-3 px-2 justify-content-between">
        {rechargeAmounts.map((amount, index) => (
          <Col key={index} className="px-1 cursor-pointer w-100 mb-3">
            <Card
              className={`d-flex flex-column w-100 align-items-center justify-content-center p-2 ${
                selectedTrigger === amount.value ? "selected-card" : ""
              }`}
              onClick={() => handleTriggerClick(amount.value)}
            >
              <Card.Text className="fs_18 red_ff dashboard-text-color">
                {amount.label}
              </Card.Text>
            </Card>
          </Col>
        ))}
      </Row>

      <div className="card  p-4 mt-3">
        <div className="d-md-flex align-items-center justify-content-between">
          <h5 className="mb-3 mb-md-0 fs_18 dashboard-text-color fw-semibold red_ff">
            Balance After Recharge
          </h5>
          <span className="bg_yellow px-2 fs_13 py-1 ">20% Extra Credit</span>
>>>>>>> 8815177228546d8faa723487948ab554a9e3dd6d
        </div>
        <Row className="mt-md-4 mt-2">
          <Col md={3} xs={6} className="mt-2 mt-md-0 position-relative px-1">
            <span style={{ cursor: "pointer" }}>
              <Image
                width={30}
<<<<<<< HEAD
                className="position-absolute pulsh_img z_index"
=======
                className="position-absolute pulsh_img z_index1"
>>>>>>> 8815177228546d8faa723487948ab554a9e3dd6d
                src={plush_Image}
                alt="plush_image"
              />
            </span>
            <div className="card card_hight ps-3 py-1 d-flex justify-content-between flex-column">
              <p className="fs_13 red_ff fw-normal dashboard-text-color">
                Current <br /> Balance
              </p>
<<<<<<< HEAD
              <h5 className="red_ff fs_18 fw-semibold homedashboars-text-color">$00</h5>
=======
              <h5 className="red_ff fs_18 fw-semibold homedashboars-text-color">
                $00
              </h5>
>>>>>>> 8815177228546d8faa723487948ab554a9e3dd6d
            </div>
          </Col>
          <Col md={3} xs={6} className="mt-2 mt-md-0 position-relative px-1">
            <span style={{ cursor: "pointer" }}>
              <Image
                width={30}
<<<<<<< HEAD
                className="position-absolute d-md-block d-none pulsh_img z_index"
=======
                className="position-absolute d-md-block d-none pulsh_img z_index1"
>>>>>>> 8815177228546d8faa723487948ab554a9e3dd6d
                src={plush_Image}
                alt="plush_img"
              />
            </span>
            <div className="card card_hight ps-3 py-1 d-flex justify-content-between flex-column">
              <p className="fs_13 red_ff fw-normal dashboard-text-color">
<<<<<<< HEAD
              Recharge <br/>Value
              </p>
              <h5 className="red_ff fs_18 fw-semibold homedashboars-text-color">$00</h5>
=======
                Recharge <br />
                Value
              </p>
              <h5 className="red_ff fs_18 fw-semibold homedashboars-text-color">
                $00
              </h5>
>>>>>>> 8815177228546d8faa723487948ab554a9e3dd6d
            </div>
          </Col>
          <Col md={3} xs={6} className="mt-2 mt-md-0 position-relative px-1">
            <span style={{ cursor: "pointer" }}>
              <Image
                width={30}
<<<<<<< HEAD
                className="position-absolute pulsh_img z_index"
=======
                className="position-absolute pulsh_img z_index1"
>>>>>>> 8815177228546d8faa723487948ab554a9e3dd6d
                src={icon}
                alt="plush_img"
              />
            </span>
            <div className="card card_hight ps-3 py-1 d-flex justify-content-between flex-column">
              <p className="fs_13 red_ff fw-normal dashboard-text-color">
<<<<<<< HEAD
                Extra<br /> Credit
              </p>
              <h5 className="red_ff fs_18  fw-semibold homedashboars-text-color">$00</h5>
=======
                Extra
                <br /> Credit
              </p>
              <h5 className="red_ff fs_18  fw-semibold homedashboars-text-color">
                $00
              </h5>
>>>>>>> 8815177228546d8faa723487948ab554a9e3dd6d
            </div>
          </Col>
          <Col md={3} xs={6} className="mt-2 mt-md-0 px-1">
            <div className="card card_hight ps-3 py-1 d-flex justify-content-between flex-column">
              <p className="fs_13 red_ff fw-normal dashboard-text-color">
                Your <br /> Balance
              </p>
<<<<<<< HEAD
              <h5 className="red_ff fs_18 fw-semibold homedashboars-text-color">$00</h5>
=======
              <h5 className="red_ff fs_18 fw-semibold homedashboars-text-color">
                $00
              </h5>
>>>>>>> 8815177228546d8faa723487948ab554a9e3dd6d
            </div>
          </Col>
        </Row>
      </div>
<<<<<<< HEAD
      <div className="d-flex mt-4 flex-column justify-content-end">
        <h4 className="fs_20 fw-semibold mt-4 red_ff mb-0 homedasboard-text-color">Proceed to Pay</h4>
        <div className="d-flex align-items-center mt-3 justify-content-between ">
          <p className="mb-0 fs_16 red_ff  fw-normal homedasboard-text-color ">Recharge Value</p>
          <h4 className="mb-0 fs_16 fw-medium dashboard-text-color red_ff">$00.00</h4>
=======
      <div className="d-flex mt-2 flex-column justify-content-end">
        <h4 className="fs_20 fw-semibold mt-4 red_ff mb-0 homedasboard-text-color">
          Proceed to Pay
        </h4>
        <div className="d-flex align-items-center mt-3 justify-content-between ">
          <p className="mb-0 fs_16 red_ff  fw-normal homedasboard-text-color ">
            Recharge Value
          </p>
          <h4 className="mb-0 fs_16 fw-medium dashboard-text-color red_ff">
            $00.00
          </h4>
>>>>>>> 8815177228546d8faa723487948ab554a9e3dd6d
        </div>
        <div className="d-flex align-items-center mt-3 justify-content-between text-dark">
          <p className="mb-0 fs_16 red_ff fw-normal dashboard-text-color  ">
            Surcharge :{" "}
<<<<<<< HEAD
            <select className="border-0 bg-white fs_16 red_ff fw-normal dashboard-text-color" name="" id="">
              <option value="Domestic " className="dashboard-text-color fs_16 red_ff fw-normal">Domestic</option>
              <option value="Domestic 1" className="dashboard-text-color fs_16 red_ff fw-normal">Domestic 1</option>
              <option value="Domestic 2" className="dashboard-text-color">Domestic 2</option>
              <option value="Domestic 3" className="dashboard-text-color">Domestic 3</option>
=======
            <select
              className="border-0 bg-white fs_16 red_ff fw-normal dashboard-text-color"
              name=""
              id=""
            >
              <option
                value="Domestic "
                className="dashboard-text-color fs_16 red_ff fw-normal"
              >
                Domestic
              </option>
              <option
                value="Domestic 1"
                className="dashboard-text-color fs_16 red_ff fw-normal"
              >
                Domestic 1
              </option>
              <option value="Domestic 2" className="dashboard-text-color">
                Domestic 2
              </option>
              <option value="Domestic 3" className="dashboard-text-color">
                Domestic 3
              </option>
>>>>>>> 8815177228546d8faa723487948ab554a9e3dd6d
            </select>
          </p>
          <h4 className="mb-0 fs_16 fw-semibold red_ff">$00.00</h4>
        </div>
<<<<<<< HEAD
        <div className="border my-4"></div>
        <div className="d-flex align-items-center  justify-content-between">
          <p className="mb-0 fs_18 fw-semibold red_ff dashboard-text-color">Grand Total</p>
          <h4 className="mb-0 fs_18 fw-semibold red_ff dashboard-text-color ">$00.00</h4>
        </div>
        <div className="pt-4 mb-4">

        <button className="button-bg-color w-100 border-0 py-3 fs_16 red_ff text-white fw-semibold rounded-2 ">
          Pay Now
        </button>
=======
        <div className="border my-3"></div>
        <div className="d-flex align-items-center  justify-content-between">
          <p className="mb-0 fs_18 fw-semibold red_ff dashboard-text-color">
            Grand Total
          </p>
          <h4 className="mb-0 fs_18 fw-semibold red_ff dashboard-text-color ">
            $00.00
          </h4>
        </div>
        <div className="pt-5">
          <button className="button-bg-color w-100 border-0 py-2 fs_16 red_ff text-white fw-semibold rounded-2 ">
            Pay Now
          </button>
>>>>>>> 8815177228546d8faa723487948ab554a9e3dd6d
        </div>
      </div>
    </div>
  );
};

export default Manual;
