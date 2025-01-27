
"use client"
import React, { useState } from "react";
import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import logo from "../../../../public/assets/images/svg/logo.svg"
import Login from "./Login";
import Register from "./Register";
import Image from "next/image";
import Link from "next/link"
import Layout from "@/app/components/Layout/Laytout";

type TabType = "login" | "register";

const LoginAndSignupHeader: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<TabType>("login");

  const handleTabClick = (tab: TabType) => {
    setSelectedTab(tab);
  };

  return (

    <div className="min-vh-100 py-3 d-flex flex-column align-items-center justify-content-center bg_theme">
      <Container className="custom_auth_header_width">
        <Link className="d-flex justify-content-center" href="#">
          <Image className="" src={logo} alt="logo" />
        </Link>
        <div className="bg-white rounded-2 mt-4 py-md-3 px-md-4 p-3">
          <Row>
            <Col
              sm={6}
              className="pe-0 text-center"
              onClick={() => handleTabClick("login")}
            >
              <Nav.Link
                href="#"
                className={
                  selectedTab === "login" ? "active-tab  color_blue" : ""
                }
              >
                <h3 className="red_ff fs_24">Login</h3>
              </Nav.Link>
              {selectedTab === "login" ? (
                <div className="mt-2 custom_border border-body border-1 border"></div>
              ) : (
                <>
                  <div className="mt-2  border-body border-1 border"></div>
                </>
              )}
            </Col>
            <Col
              sm={6}
              className="ps-0 text-center"
              onClick={() => handleTabClick("register")}
            >
              <Nav.Link
                href="#"
                className={
                  selectedTab === "register" ? "active-tab color_blue" : ""
                }
              >
                <h3 className="red_ff fs_24">Register</h3>
              </Nav.Link>
              {selectedTab === "register" ? (
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
              eventKey="login"
              className={selectedTab === "login" ? "show active" : ""}
            >
              <Login />
            </Tab.Pane>
            <Tab.Pane
              eventKey="register"
              className={selectedTab === "register" ? "show active" : ""}
            >
              <Register />
            </Tab.Pane>
          </Tab.Content>
        </div>
      </Container>
    </div>
 
  );
};

export default LoginAndSignupHeader;
