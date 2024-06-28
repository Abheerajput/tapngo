import React, { useState } from "react";
import and_icon from "../../../../public/assets/images/svg/or_icon.svg";
import cross_icon from "../../../../public/assets/images/svg/cross_icon.svg";
import VerificationCode from "./VerificationCode";
import { Modal, Container, Form, Button, Card, Image } from "react-bootstrap";

const ForgotCredential = () => {
  const [isVehicleModalOpen, setIsVehicleModalOpen] = useState<boolean>(false);

  const openVehicleModal = () => {
    setIsVehicleModalOpen(true);
  };

  const closeVehicleModal = () => {
    setIsVehicleModalOpen(false);
  };

  return (
    <Container
      fluid
      className="min-vh-100 d-flex flex-column align-items-center justify-content-center bg_theme"
    >
      <Card className="custom_width p-4">
        <Card.Body className="">
          <Card.Title
            as="h4"
            className="fs_24 text-center red_ff fw_semibold mb-5"
          >
            Forgot Credential?
          </Card.Title>

          <Form>
            <Form.Group controlId="formEmailOrMobile" className="mb-4">
              <Form.Label className="red_ff fs_16 fw-semibold">
                Enter Details*
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Email ID or Mobile Number"
                className="py-2 px-3 border-2 border rounded-2"
              />
            </Form.Group>

            <Image src={and_icon} className="my-2 w-100" alt="and_icon" />

            <Form.Group controlId="formCorporateCard" className="mb-4 mt-3">
              <Form.Label className="red_ff fs_16 fw-semibold">
                Corporate Card*
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your Corporate Card"
                className="py-2 px-3 border-2 border rounded-2"
              />
            </Form.Group>

            <Button
              onClick={openVehicleModal}
              className="w-100 bg_blue text-white fs_16 fw-semibold py-2 rounded-2 border-0"
            >
              Send OTP
            </Button>
          </Form>
        </Card.Body>
      </Card>

      <VerificationCode
        isModalOpen={isVehicleModalOpen}
        closeModal={closeVehicleModal}
      />
    </Container>
  );
};

export default ForgotCredential;
