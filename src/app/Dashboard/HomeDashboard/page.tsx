"use client"
import React, { useState } from "react";
import Image from "next/image";
import { GoChevronDown } from "react-icons/go";
import { Col, Form, Nav, Row, Tab, Modal, Button } from "react-bootstrap";
import qus_icon from "../../../../public/assets/images/svg/qus_icon.svg";
import dowload_icon from "../../../../public/assets/images/svg/dowload_icon.svg";
import cercle_Image from '../../../../public/assets/images/svg/cercle_img.svg';
import blue_image from "../../../../public/assets/images/svg/blue_box.svg";
import yellow_image from "../../../../public/assets/images/svg/yellow_box.svg";
import Manual from "./Manual";
import Auto from "./Auto";
import Subscription from "./Subscription";
import "./homedashboard.css"
import Layout from "@/app/components/Layout/Laytout";

type TabType = "Manual" | "Auto" | "Subscription";

const Home: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<TabType>("Manual");
  const [showModal, setShowModal] = useState(false);
  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  const [toggleState, setToggleState] = useState(false);



  const handleTabClick = (tab: TabType) => {
    setSelectedTab(tab);
  };

  return (
    <Layout>

      <div className="py-4 ">
        <Row>
          <Col xl={7}>
            <Row >
              <Col md={6} className="mt-4  mt-md-0 ">
                <div className="card pt-4  d-flex flex-column justify-content-between h-100 p-md-4 p-3 border-0">
                  <div>
                    <p className="fs_20 red_ff mb-0">Current Balance</p>
                    <h3 className="fs_40 red_ff fw-bold">$116.30</h3>
                  </div>
                  <div className="d-flex align-items-end justify-content-between">
                    <div>
                      <p className="fs_16 red_ff mb-0">Current Balance</p>
                      <h3 className="fs_20 red_ff mb-0 fw-semibold">
                        046 8311 6661
                      </h3>
                    </div>
                    <div className="d-flex gap-2 align-items-center">
                      <Image src={qus_icon} alt="qus_icon" onClick={handleShowModal} style={{ cursor: "pointer" }} />
                      <Image src={dowload_icon} alt="dowload_icon" />
                    </div>
                  </div>
                </div>
              </Col>

              <Col md={6} className="mt-4  mt-md-0 ">
                <div className="card  d-flex flex-column justify-content-between h-100 p-md-4 p-3 border-0">
                  <div className="d-flex justify-content-between align-items-center">
                    <p className="fs_24 red_ff fw-semibold mb-0">Summary</p>
                    <Form.Select
                      className="w-25 py-1"
                      aria-label="Default select example"
                    >
                      <option>Year</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Form.Select>
                  </div>
                  <div className="d-flex align-items-center justify-content-between">
                    <Image src={cercle_Image} alt="cercle_Image" />
                    <div>
                      <div className="d-flex align-items-center gap-1">
                        <Image src={blue_image} alt="blue_image" />
                        <p className="mb-0">Auto</p>
                      </div>
                      <div className="d-flex mt-3 align-items-center gap-1">
                        <Image src={yellow_image} alt="yellow_image" />
                        <p className="mb-0">Manual</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col xs={12} className="mt-4">
                <div className="card p-md-4 p-3 border-0">
                  <div className="d-flex justify-content-between align-items-center">
                    <h5 className="fs_24 fw-semibold source_ff">Recent Usage</h5>
                    <a className="tdn fw-semibold red_ff" href="#">
                      View All
                    </a>
                  </div>
                  <div className="d-flex mt-3 justify-content-between align-items-center">
                    <div>
                      <p className="mb-0 fs_16 red_ff fw-normal">
                        Manual Recharge
                      </p>
                      <p className="mb-0 red_ff fs_14 text-color">04 January 2024</p>
                    </div>
                    <h6 className="fs_20 red_ff fw-semibold mb-0">$1.33</h6>
                  </div>
                  <div className="border mt-3"></div>
                  <div className="d-flex mt-3 justify-content-between align-items-center">
                    <div>
                      <p className="mb-0 fs_16 red_ff fw-normal">
                        Auto Top-Up
                      </p>
                      <p className="mb-0 red_ff fs_14 text-color">04 January 2024</p>
                    </div>
                    <h6 className="fs_20 red_ff fw-semibold mb-0">$1.33</h6>
                  </div>
                  <div className="border mt-3"></div>
                  <div className="d-flex mt-3 justify-content-between align-items-center">
                    <div>
                      <p className="mb-0 fs_16 red_ff fw-normal">
                        Manual Recharge
                      </p>
                      <p className="mb-0 red_ff fs_14 text-color">04 January 2024</p>
                    </div>
                    <h6 className="fs_20 red_ff fw-semibold mb-0">$1.33</h6>
                  </div>
                  <div className="border mt-3"></div>
                  <div className="d-flex mt-3 justify-content-between align-items-center">
                    <div>
                      <p className="mb-0 fs_16 red_ff fw-normal">
                        Manual Recharge
                      </p>
                      <p className="mb-0 red_ff fs_14 text-color">04 January 2024</p>
                    </div>
                    <h6 className="fs_20 red_ff fw-semibold mb-0">$1.33</h6>
                  </div>
                  <div className="border mt-3"></div>
                  <div className="d-flex mt-3 justify-content-between align-items-center">
                    <div>
                      <p className="mb-0 fs_16 red_ff fw-normal">
                        Auto Top-Up
                      </p>
                      <p className="mb-0 red_ff fs_14 text-color">04 January 2024</p>
                    </div>
                    <h6 className="fs_20 red_ff fw-semibold mb-0">$1.33</h6>
                  </div>
                  <div className="border mt-3"></div>
                </div>
              </Col>
            </Row>
          </Col>
          <Col xl={5} className="mt-4 mt-xl-0">
            <div className="card  h-100 border-0 p-md-4 p-3">
              <div className="d-sm-flex justify-content-between align-items-center">
                <span className="d-flex gap-2">
                  <h4 className="fs_24 fw-semibold red_ff" > Recharge Prepaid </h4>
                </span>
                <div className="d-flex mt-3 mt-sm-0 align-items-center gap-3">
                  <p >Auto Top-up</p>
                  <div className="border rounded-5 m-0 ">


                    <Form className="border-1 rounded-1 py-2 px-2 d-flex justify-content-center">
                      <Form.Check
                        type="switch"
                        id="custom-switch"
                        label={
                          <span>
                            {toggleState ? 'On' : 'Off'}
                          </span>
                        }
                        onChange={(event) => {
                          setToggleState(event.target.checked);
                        }}
                      />
                    </Form>
                  </div>
                </div>
              </div>

              <Row className="mt-4">
                <Col
                  xs={4}
                  className="pe-0 text-center"
                  onClick={() => handleTabClick("Manual")}
                >
                  <Nav.Link
                    href="#"
                    className={
                      selectedTab === "Manual" ? "active-tab color_blue" : ""
                    }
                  >
                    <h3 className="red_ff fs_16">Manual</h3>
                  </Nav.Link>
                  {selectedTab === "Manual" ? (
                    <div className="mt-2 custom_border border-body border-1 border"></div>
                  ) : (
                    <>
                      <div className="mt-2  border-body border-1 border"></div>
                    </>
                  )}
                </Col>
                <Col
                  xs={4}
                  className="px-0 text-center"
                  onClick={() => handleTabClick("Auto")}
                >
                  <Nav.Link
                    href="#"
                    className={
                      selectedTab === "Auto" ? "active-tab color_blue" : ""
                    }
                  >
                    <h3 className="red_ff fs_16">Auto</h3>
                  </Nav.Link>
                  {selectedTab === "Auto" ? (
                    <div className="mt-2 custom_border border-1 border"></div>
                  ) : (
                    <>
                      <div className="mt-2  border-body border-1 border"></div>
                    </>
                  )}
                </Col>
                <Col
                  xs={4}
                  className="ps-0 text-center"
                  onClick={() => handleTabClick("Subscription")}
                >
                  <Nav.Link
                    href="#"
                    className={
                      selectedTab === "Subscription"
                        ? "active-tab color_blue"
                        : ""
                    }
                  >
                    <h3 className="red_ff fs_16">Subscription</h3>
                  </Nav.Link>
                  {selectedTab === "Subscription" ? (
                    <div className="mt-2 custom_border border-1 border"></div>
                  ) : (
                    <>
                      <div className="mt-2  border-body border-1 border"></div>
                    </>
                  )}
                </Col>
              </Row>
              <Tab.Content className="mt-3">
                <Tab.Pane
                  eventKey="Manual"
                  className={selectedTab === "Manual" ? "show active" : ""}
                >
                  <Manual />
                </Tab.Pane>
                <Tab.Pane
                  eventKey="Auto"
                  className={selectedTab === "Auto" ? "show active" : ""}
                >
                  <Auto />
                </Tab.Pane>
                <Tab.Pane
                  eventKey="Subscription"
                  className={selectedTab === "Subscription" ? "show active" : ""}
                >
                  <Subscription />
                </Tab.Pane>
              </Tab.Content>
            </div>
          </Col>
        </Row>

        <div className="custom-Modal">
          <Modal className="custom-Modal modal-sm" show={showModal} onHide={handleCloseModal}>
            <Modal.Body className="">
              <div className="d-flex justify-content-center">
                <p className=" fs_14 red_ff fw-normal">Lost Card / Request  <br /> Replacement for Card ?</p>
              </div>
              <div className="w-100 d-flex justify-content-center align-items-center">
                <p className=" w-50 d-flex justify-content-center text-blue border_bottom fs_14 fw-medium red_ff "> Click Here</p>
              </div>
            </Modal.Body>
          </Modal>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
