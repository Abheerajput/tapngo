
"use client";
import React from 'react';
import Table from 'react-bootstrap/Table';
import { Row, Button, Col } from 'react-bootstrap';
import "./notification.css";
import Layout from '@/app/components/Layout/Laytout';

const NotificationPage = () => {

  const notifications = [
    {
      initial: 'C',
      title: 'Card Authorization Request',
      description: 'Andrew has requested to add you as a family member. On approval, they will be able to manage your card.',
      actions: true,
    },
    {
      initial: 'B',
      title: 'Budget Threshold Reached',
      description: 'You have reached 90% of your monthly dining out budget. Consider adjusting your spending to stay within budget limits and...',
      time: '30 min',
    },
    {
      initial: 'F',
      title: 'Financial Goal Progress',
      description: 'Congratulations! You\'ve made significant progress towards your \'Vacation Fund\' goal. You are now 70% closer to your target....',
      time: '30 min',
    },
    {
      initial: 'U',
      title: 'Unusual Spending Patterns',
      description: 'We\'ve noticed a spike in your online shopping expenses this month. If this is expected, no action is needed. However, if you...',
      time: '30 min',
    },
    {
      initial: 'R',
      title: 'Reminder to Categorize Expenses',
      description: 'You have several uncategorized transactions in your account. To ensure accurate spending analysis, please take a moment...',
      time: '30 min',
    },
    {
      initial: 'R',
      title: 'Reminder to Categorize Expenses',
      description: 'You have several uncategorized transactions in your account. To ensure accurate spending analysis, please take a moment...',
      time: '30 min',
    },
  

  ];

  return (
    <>
    <Layout>


    <div className='bg-white px-3  py-2 mt-2 rounded-2 '>
        <Row className='bg-white  '>
          <Col xs={3} md={6} className=' fw-semibold my-2 notification-header text-dark'>
            Notifications
          </Col>
          <Col xs={9} md={6} className='d-flex justify-content-md-end justify-content-center my-2'>
            <div className='d-flex gap-1   gap-sm-2 text-reponsive'>
              <Button className='Custom_button text-dark fw-medium text-reponsive red_ff fs_14 px-1  rounded-2'>Archive all</Button>
              <Button className='Custom_button text-dark fw-medium text-reponsive red_ff fs_14 px-1 rounded-2'>Mark all as Read</Button>
            </div>
          </Col>
        </Row>
        <hr />
        <Row className=' d-flex bg-white py-3 mx-2  text-dark  '>
          {notifications.map((notification, index) => (
            <div key={index} className='notification-item mb-3 m-0 p-0'>
              <Row className='border common-border d-flex justify-content-between rounded-3 p-2 bg-white'>
                <Col xs={1} className='d-flex align-items-center  p-0 m-0 ms-1' style={{width:"30px"}}>
                  <input className='checkbox' type="checkbox" />
                </Col>
                <Col xs={1} className={`circle${index % 2} circle0 initial-reps d-flex justify-content-center align-items-center  fs_20 rounded-circle`}>
                  {notification.initial}
                </Col>

                <Col xs={8} md={3} className='d-flex align-items-center text-wrap md-fs_18 sm-fs_16   fw-medium red_ff'>
                  {notification.title}
                </Col>
                <Col xs={12} md={5} className='d-flex align-items-center text-start respon-desc sm-fs_16 red_ff description-text'>
                  {notification.description}
                </Col>
                
                <Col xs={12} md={2} className='d-flex align-items-center justify-content-md-end justify-content-start mt-2 mt-md-0'>
                  {notification.actions ? (
                    <>
                      <Button className='Accept-button mx-1'>Accept</Button>
                      <Button className='Decline-button mx-1'>Decline</Button>
                    </>
                  ) : (
                    <p className='mb-0'>{notification.time}</p>
                  )}
                </Col>
              </Row>
            </div>
          ))}
        </Row>
      </div>
      </Layout>
    </>
  );
}

export default NotificationPage;
