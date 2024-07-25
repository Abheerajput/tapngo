import React from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

const CarRegistration = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <>



    <Row className=' pt-4 bg-white '>
      <p className='fs_24 red_ff fw-semibold text-dark ps-4'>Wish to attach your vehicle details?</p>
      
      <Form onSubmit={handleSubmit} className='ps-4 pe-4'>

        <Col xs={12} md={6} className='text-dark'>
          <Form.Group className="mb-3 text-dark" controlId="vehicleMake">
            <Form.Label className='fs_16 red_ff fw-normal'>Make of your Vehicle</Form.Label>
            <Form.Control type="text" placeholder="Enter make" />
          </Form.Group>
        </Col>
        <Col xs={12} md={6}>
          <Form.Group className="mb-3 text-dark" controlId="vehicleModel">
            <Form.Label className='fs_16 red_ff fw-normal'>Model of your Vehicle</Form.Label>
            <Form.Control type="text" placeholder="Enter model" />
          </Form.Group>
        </Col>


        <Col xs={12} md={6}>
          <Form.Group className="mb-3 text-dark" controlId="vehicleYear">
            <Form.Label className='fs_16 red_ff fw-normal'>Year of Your Vehicle</Form.Label>
            <Form.Control type="text" placeholder="Enter year" />
          </Form.Group>
        </Col>
        <Col xs={12} md={6}>
          <Form.Group className="mb-3 text-dark" controlId="carRegistration">
            <Form.Label className='fs_16 red_ff fw-normal'>Car Registration</Form.Label>
            <Form.Control type="text" placeholder="Enter registration" />
          </Form.Group>
        </Col>

        <Button variant="primary" type="submit" className="mt-3 w-50 d-flex justify-content-center md:w-50">Add Now</Button>
      </Form>
    </Row>
    
    </>

  );
};

export default CarRegistration;
