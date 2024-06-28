import React from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import user from "../../../../public/assets/images/svg/userimg.svg"; 
import Image from 'next/image';

const SocialMedia = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div>
      <Row className="mb-4 ps-3 pt-3">
        <Col className="d-flex align-items-center text-dark">
          <Image src={user} alt="User" className="rounded-circle me-3" style={{ width: '80px', height: '80px' }} />
          <div>
            <h3 className='fs_24 red_ff fw-semiblod'>Andrew Jonson</h3>
            <p>+01 234 567 890</p>
          </div>
        </Col>
      </Row>
      <Form onSubmit={handleSubmit} className='ps-3 text-dark'>
      <Col xs={12} md={6}>
        <Form.Group className="mb-3  sm-w-100 text-dark" controlId="instagram">
          <Form.Label>Instagram</Form.Label>
          <Form.Control type="text" placeholder="https://www.instagram.com/notdummy/?hl=en" />
        </Form.Group>
        </Col>
        <Col xs={12} md={6}>
        <Form.Group className="mb-3  sm-w-100 " controlId="linkedin">
          <Form.Label>LinkedIn</Form.Label>
          <Form.Control type="text" placeholder="https://www.linkedin.com/in/dummy-link-775982111/?original..." />
         
        </Form.Group>
        </Col>
        <Col xs={12} md={6}>
        <Form.Group className="mb-3 sm-w-100 " controlId="twitter">
          <Form.Label>Twitter</Form.Label>
          <Form.Control type="text" placeholder="https://twitter.com/dummy?ref_src=twsrc%5Egoogle%7Ctwcamp..." />
        </Form.Group>
        </Col>
        <Col xs={12} md={6}>
        <Form.Group className="mb-3  sm-w-100" controlId="facebook">
          <Form.Label>Facebook</Form.Label>
          <Form.Control type="text" placeholder="https://insideablog.wordpress.com/2011/04/14/facebook..." />
        </Form.Group >
        </Col>
        
     
        <Button variant="primary" type="submit" className=" mt-3 w-50 sm-w-100  ">Save Changes</Button>
      
       
      

      </Form>
    </div>
  );
};

export default SocialMedia;
