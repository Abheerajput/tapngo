"use client"
import React from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
import Image from 'next/image';
import Layout from '@/app/components/Layout/Laytout';

import "./subcription.css"
const Subscription = () => {
  const data = [
    {
      heading: "Starter Plan",
      price: "$49",
      month: "/month",
      info: "Basic Reporting",
      info1: "Email Reminders",
      info2: "Budgeting Tools",
      info3: "Expense Tracking",
      info4: "Customer Support",
      plan: "Current Plan",
      isActive: true
    },
    {
      heading: "Basic Plan",
      price: "$99",
      month: "/month",
      info: "Expense Tracking",
      info1: "Basic Reporting",
      info2: "Budgeting Tools",
      info3: "Email Reminders",
      info4: "Customer Support",
      plan: "Upgrade Now"
    },
    {
      heading: "Premium Plan",
      price: "$199",
      month: "/month",
      info: "Automatic Transaction Import",
      info1: "Advanced Analytics",
      info2: "Customizable Dashboards",
      info3: "Expense Tracking",
      info4: "Financial Goal Tracking",
      plan: "Upgrade Now"
    },
    {
      heading: "Platinum Plan",
      price: "$229",
      month: "/month",
      info: "Real-Time Data Sync",
      info1: "AI-Powered Insights",
      info2: "Expense Forecasting",
      info3: "Multi-Currency Support",
      info4: "Exclusive Financial Workshops",
      plan: "Upgrade Now"
    },
  ];

  return (
    <>
    <Layout>
    <div className='rounded-2 p-md-4 p-3 mt-4 bg-white'>
        <Row className="align-items-center">
          <Col xs={12} className='ms-md-2'>
            <h1 className='fs_24 fw-semibold pt-md-3 red_ff text-dark'>Subscription</h1>
            <p className='fs_16 mb-md-4 mb-0 pt-1 red_ff text-dark '>Take your desired plan to get access to our content easily,<br /> we  like to offer special license offer to our users.</p>
          </Col>
        </Row>
        <Row className="justify-content-center p-2">
          {data.map((row, index) => (
            <Col key={index} sm={6} xl={3} className="mb-4 px-1 px-md-2 ">
              <Card className="bg-color p-md-3 h-100 border-0"  >
                <Card.Body className='d-flex flex-column justify-content-between'>
                  <div>
                  <Card.Title className="fs_20 fw-medium red_ff ">{row.heading}</Card.Title>
                  <div className='d-flex align-items-end mar-bot-2'>
                    <p className="fs_40 mb-0 fw-semibold red_ff" >{row.price}</p>
                    <p className="mb-2">{row.month}</p>
                  </div>
                  <hr />
                  <Card.Text>
                    <p className="d-flex gap-md-3 gap-2 red_ff "><Image src="/assets/Images/svg/tick.svg" alt="tick" />{row.info}</p>
                    <p className="d-flex gap-md-3 gap-2 red_ff "><Image src="/assets/Images/svg/tick.svg" alt="tick" />{row.info1}</p>
                    <p className="d-flex gap-md-3 gap-2 red_ff "><Image src="/assets/Images/svg/tick.svg" alt="tick" />{row.info2}</p>
                    <p className="d-flex gap-md-3 gap-2 red_ff "><Image src="/assets/Images/svg/tick.svg" alt="tick" />{row.info3}</p>
                    <p className="d-flex gap-md-3 gap-2 red_ff "><Image src="/assets/Images/svg/tick.svg" alt="tick" />{row.info4}</p>
                  </Card.Text>
                  </div>
                  <div className='d-flex justify-content-center mt-5 pt-5 red_ff'>
                    <Button variant="primary" className='w-100'>{row.plan}</Button>
                    {row.isActive}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
      </Layout>
    </>
  );
};

export default Subscription;
