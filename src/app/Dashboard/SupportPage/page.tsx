

"use client"
import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import { Row, Button, Col } from 'react-bootstrap';
import './Support.css';
import greenball from "../../../../public/assets/images/svg/greenball.svg"
import pdf from "../../../../public/assets/images/svg/pdf.svg"
import cross from "../../../../public/assets/images/cross.svg"
import TicketModal from './TicketModal';
import Image from 'next/image';
import Layout from '@/app/components/Layout/Laytout';
const Support = () => {
  const [showOpenTickets, setShowOpenTickets] = useState(true);
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  const OpenTickets = [
    { issueType: 'Request Card', summary: 'Lorem ipsum dummy text....', date: '02/06/2024', status: 'Pending' },
    { issueType: 'Request Card', summary: 'Lorem ipsum dummy text....', date: '02/06/2024', status: 'Pending' },
    { issueType: 'Request Card', summary: 'Lorem ipsum dummy text....', date: '02/06/2024', status: 'Pending' },
    { issueType: 'Request Card', summary: 'Lorem ipsum dummy text....', date: '02/06/2024', status: 'Pending' },
    { issueType: 'Request Card', summary: 'Lorem ipsum dummy text....', date: '02/06/2024', status: 'Pending' },
    { issueType: 'Request Card', summary: 'Lorem ipsum dummy text....', date: '02/06/2024', status: 'Pending' },
    { issueType: 'Request Card', summary: 'Lorem ipsum dummy text....', date: '02/06/2024', status: 'Pending' },
  ];

  const ResolvedTickets = [
    { issueType: 'Request Card', summary: 'Lorem ipsum dummy text....', date: '02/06/2024', status: 'Resolved' },
    { issueType: 'Request Card', summary: 'Lorem ipsum dummy text....', date: '02/06/2024', status: 'Resolved' },
    { issueType: 'Request Card', summary: 'Lorem ipsum dummy text....', date: '02/06/2024', status: 'Resolved' },
    { issueType: 'Request Card', summary: 'Lorem ipsum dummy text....', date: '02/06/2024', status: 'Resolved' },
    { issueType: 'Request Card', summary: 'Lorem ipsum dummy text....', date: '02/06/2024', status: 'Resolved' },
    { issueType: 'Request Card', summary: 'Lorem ipsum dummy text....', date: '02/06/2024', status: 'Resolved' },
    { issueType: 'Request Card', summary: 'Lorem ipsum dummy text....', date: '02/06/2024', status: 'Resolved' },
  ];

  const updates = [
    {
      initial: 'T',
      title: 'Transaction Alert',
      description: 'Andrew has requested to add you as a family member. On approval, they will be able to manage your card.',
      time: '30 min',
    },
    {
      initial: 'T',
      title: 'Transaction Alert',
      description: 'You have reached 90% of your monthly dining out budget. Consider adjusting your spending to stay within budget limits and...',
      time: '30 min',
    },
    {
      initial: 'T',
      title: 'Transaction Alert',
      description: 'Congratulations! You\'ve made significant progress towards your \'Vacation Fund\' goal. You are now 70% closer to your target....',
      time: '30 min',
    },
  ];

  return (
    <>
    
    <Layout>
    <Row className='px-3 py-3 p-sm-0 '>
    <Col className='bg-white'> 
    <div className='d-flex justify-content-between mt-3 '>
        <p className='fs_28 fw-semibold text-nowrap m-0 p-0 fs-sm-20'>Support Tickets</p>
        <span className="d-flex ">

        <button className='p-0 m-0 bg-primary rounded-2 px-2 text-white text-nowrap' onClick={handleShowModal}>
          Raise Ticket
        </button>
        </span>
      </div>
      <div className='d-flex gap-3'>
<Button
  variant={showOpenTickets ? 'link' : ''}
  className={showOpenTickets ? 'text-decoration-underline' : ''}
  onClick={() => setShowOpenTickets(true)}
>
  Open Tickets
</Button>
<Button
  variant={!showOpenTickets ? 'link' : ''}
  className={!showOpenTickets ? 'text-decoration-underline' : ''}
  onClick={() => setShowOpenTickets(false)}
>
  Resolved Tickets
</Button>
</div>

      <hr className='p-0 m-0 my-2'/>
    
      <Table striped className="p-0 m-0">
       
        <thead>
          <tr className='fs_18 fw-semibold border  '>
            <th className="py-2 position-relative">
              <div className="d-inline-block px-3">Issue Type</div>
            </th>
            <th className="py-3">Summary</th>
            <th className="py-3">Date</th>
            <th className="py-3">Status</th>
          </tr>
        </thead>
     
        {/* <div className='m-0 p-0'>  */}
        <tbody>
          {(showOpenTickets ? OpenTickets : ResolvedTickets).map((ticket, index) => (
            <tr key={index} className='border fs_16 fw-light px-2 '>
              <td className="py-3 position-relative rounded-2">
                <div className="d-inline-block px-3 red_ff fs_16 ">{ticket.issueType}</div>
              </td>
              <td className="py-3 position-relative">
                <div className="d-inline-block red_ff fs_16 ">{ticket.summary}</div>
              </td>
              <td className="py-3 position-relative">
                <div className="d-inline-block red_ff fs_16 ">{ticket.date}</div>
              </td>
              <td className="py-3 position-relative">
                <div className="d-inline-block red_ff fs_16 fw-medium font-color">{ticket.status}</div>
              </td>
            </tr>
          ))}
        </tbody>
          
        {/* </div> */}
          
      </Table>
      <TicketModal show={showModal} handleClose={handleCloseModal} />
      
    </Col>
   
    <Col className='bg-white'> 
      <div className=' d-flex flex-dir-col justify-content-between mt-3  '>
        <div className='d-flex'>
          <div>
            <p className='fs_24 fw-medium red_ff text-sm-nowrap '>Request Card</p>
            <p>#12143235</p>
          </div>
          <div className='responsive-botton'>
            <button className='Progress-button sm-fs-10 px-3 py-1 rounded-2 mx-3'>
              <Image src={greenball} alt="" /> In Progress</button>
            <button className='Action-button sm-fs-10 px-3 py-1 rounded-2'> Action Required</button>
          </div>
        </div>
        <div className='d-sm-flex'>
          <p>Created on</p>
          <p>08-02-2024</p>
        </div>
      </div>
      <div>
        <Form>
          <Form.Group className="mt-3" controlId="exampleForm.ControlInput1">
          </Form.Group>
          <Form.Group className="mt-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id es' rows={3} />
          </Form.Group>
        </Form>
        <span className="attachment d-flex w-25 sm-w-50 mt-3 bg-pdf">
          <p className='pt-3 ps-2'> 
            <Image src={pdf} alt="Attachment Icon" style={{height:"28px",width:"20px"}} />
          </p>
          <span className='px-2 pt-2  '>
            <p className='m-0 p-0 fs_13 fw-light red_ff '>Issue Screenshot</p>
            <p className='m-0 p-0 fs_13 fw-light red_ff '>3.1MB</p>
          </span>
          <span className="d-flex justify-content-center align-items-center">

          <Image src={cross} alt="" className='ps-2 ' />
          </span>
        </span>
      </div>
      <div className='mt-3'>
        <h6>Updates</h6>
        <Table striped bordered hover className='table-responsive'>
          <tbody>
            {updates.map((update, index) => (
              <div key={index}>
                <tr className='border-0 d-flex justify-content-between rounded-3'>
                  <div className='d-flex gap-2 align-items-center'>
                    <td className={`initial${index % 2} d-flex justify-content-center initial align-items-center fs_13 border-0 rounded-5`}>{update.initial}</td>
                    <td className='fs_14 fw-medium red_ff'>{update.title}   12-02-2024</td>
                  </div>
                  <td className='d-flex align-items-center text-start fs_13 red_ff'>{update.description}</td>
                  <td className='d-flex align-items-center text-start fs_13 red_ff'>{update.time}</td>
                </tr>
              </div>
            ))}
          </tbody>
        </Table>
      </div>
    </Col>
  </Row>
  </Layout>
  </>
  );
}

export default Support;

