import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

type AmountOption = {
  label: string;
  value: string;
};

const Auto: React.FC = () => {
  const rechargeAmounts: AmountOption[] = [
    { label: "$100", value: "100" },
    { label: "$200", value: "200" },
    { label: "$500", value: "500" },
    { label: "$1000", value: "1000" },
    { label: "Custom", value: "custom" },
  ];

  return (
    <Container className="h-100">
      <p className="mb-0 fs-14 red_ff">
        With auto recharge, we will recharge your card / fob when your balance
        falls below the selected threshold.
      </p>
      <h4 className="mt-4 fs-20 fw-semibold red_ff">
        Select the Recharge Amount
      </h4>
      <Row className="mt-3">
        {rechargeAmounts.map((amount, index) => (
          <Col key={index} className="custom_col mb-3">
            <Card className="d-flex flex-column align-items-center justify-content-center p-2">
              <Card.Text className="fs-18 red_ff">{amount.label}</Card.Text>
            </Card>
          </Col>
        ))}
      </Row>
      <h4 className="mt-4 fs-20 fw-semibold red_ff">Recharge trigger point</h4>
      <Row className="mt-3">
        {rechargeAmounts.map((amount, index) => (
          <Col key={index} className="custom_col mb-3">
            <Card className="d-flex flex-column align-items-center justify-content-center p-2">
              <Card.Text className="fs-18 red_ff">{amount.label}</Card.Text>
            </Card>
          </Col>
        ))}
      </Row>
      <div className="d-flex flex-column justify-content-end mt-4">
        <Button className="w-100 py-3 fs-16 fw-semibold rounded-2 bg-primary text-white">
          Set Auto Top-up Now
        </Button>
      </div>
    </Container>
  );
};

export default Auto;
