"use client"
import React, { useState } from 'react';
import './usages.css';
import { Row, Col, Nav, Form } from 'react-bootstrap';
import search from "../../../../public/assets/images/svg/search.svg"
import bar from "../../../../public/assets/images/svg/bar.svg"
import logo from "../../../../public/assets/images/svg/logo.svg";
import Share from "../../../../public/assets/images/svg/share.svg"
import download  from "../../../../public/assets/images/svg/download.svg"
import Image from 'next/image';

type ComponentType = 'Usage' | 'Tax Invoice' | 'Statements';
const UsagesList = () => {
  const [activeComponent, setActiveComponent] = useState<ComponentType>('Usage');
  
  const handleComponentChange = (component: ComponentType) => () => setActiveComponent(component);
  const data = [
    {
      code: '001491',
      date: '04 Jan 2024',
      name: 'Sagar Malik',
      company: 'Charlie’s Car & Dog Wash PTY LTD',
      status: 'Paid',
      amount: '$1.33',
    },
    {
      code: '001491',
      date: '04 Jan 2024',
      name: 'Sagar Malik',
      company: 'Charlie’s Car & Dog Wash PTY LTD',
      status: 'Paid',
      amount: '$1.33',
    },
    
  ];

  const data1 = [
    {
      code: '001491',
      date: '04 Jan 2024',
      name: 'Sagar Malik',
      company: 'Charlie’s Car & Dog Wash PTY LTD',
      status: 'Paid',
      amount: '$1.33',
    },
    {
      code: '001491',
      date: '04 Jan 2024',
      name: 'Sagar Malik',
      company: 'Charlie’s Car & Dog Wash PTY LTD',
      status: 'Paid',
      amount: '$1.33',
    },
    {
      code: '001491',
      date: '04 Jan 2024',
      name: 'Sagar Malik',
      company: 'Charlie’s Car & Dog Wash PTY LTD',
      status: 'Paid',
      amount: '$1.33',
    },
   
  ];

  const data2 = [
    {
      Description: 'Monthly Statement',
      date: '01-02-2024',
      TotalUsage: '$1020',
      Recharge: '$1020',
      balance: '$1020',
    },
    {
      Description: 'Monthly Statement',
      date: '01-02-2024',
      TotalUsage: '$1020',
      Recharge: '$1020',
      balance: '$1020',
    },
    {
      Description: 'Monthly Statement',
      date: '01-02-2024',
      TotalUsage: '$1020',
      Recharge: '$1020',
      balance: '$1020',
    },
   
  ];

  const [selectedTab, setSelectedTab] = useState<'Usage' | 'TaxInvoice' | 'Statements'>('Usage');

  const handleTabClick = (tab: 'Usage' | 'TaxInvoice' | 'Statements') => {
    setSelectedTab(tab);
  };

  const renderTableData = () => {
    if (selectedTab === 'Usage') {
      return (
        <table className='table'>
          <thead>
            <tr>
              <th scope='col' className='red-ff fs_16 fw-medium text-start Usage-text-color'>Invoice No.</th>
              <th scope='col' className='red-ff fs_16 fw-medium text-start Usage-text-color'>Date</th>
              <th scope='col' className='red-ff fs_16 fw-medium text-start Usage-text-color'>From</th>
              <th scope='col' className='red-ff fs_16 fw-medium text-start Usage-text-color'>To</th>
              <th scope='col' className='red-ff fs_16 fw-medium text-start Usage-text-color'>Status</th>
              <th scope='col' className='red-ff fs_16 fw-medium text-start Usage-text-color'>Amount</th>
              <th scope='col red-ff fs_16 fw-medium text-start Usage-text-color'></th>
              <th scope='col red-ff fs_16 fw-medium text-start Usage-text-color'></th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                <td className='text-nowrap text-start  fs_14 fw-normal Usage-text-color red_ff'>{row.code}</td>
                <td className='text-nowrap text-start  fs_14 fw-normal Usage-text-color red_ff'>{row.date}</td>
                <td className='text-nowrap text-start  fs_14 fw-normal Usage-text-color red_ff'>{row.name}</td>
                <td className='text-nowrap text-start  fs_14 fw-normal Usage-text-color red_ff'>{row.company}</td>
                <td className='text-success fs_14 red_ff  text-start text-nowrap'>{row.status}</td>
                <td className='fs_14 red_ff fw-medium  text-start text-nowrap '>{row.amount}</td>
                <td>
                  <p className='action text-nowrap text-start  fs_14 fw-normal Usage-text-color red_ff'>
                    share <Image src={Share} alt='share' />
                  </p>
                </td>
                <td>
                  <p className='action text-nowrap text-start  fs_14 fw-normal Usage-text-color red_ff'>
                    download <Image src={download} alt='download' />
                  </p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      );
    } else if (selectedTab === 'TaxInvoice') {
      return (
        <table className='table'>
          <thead>
            <tr>
              <th scope='col' className='red-ff fs_16 fw-medium text-start Usage-text-color '>Invoice No.</th>
              <th scope='col' className='red-ff fs_16 fw-medium text-start Usage-text-color'>Date</th>
              <th scope='col' className='red-ff fs_16 fw-medium text-start Usage-text-color'>From</th>
              <th scope='col' className='red-ff fs_16 fw-medium text-start Usage-text-color'>To</th>
              <th scope='col' className='text-success text-start'>Status</th>
              <th scope='col' className='text-start'>Amount</th>
              <th scope='col text-start'></th>
              <th scope='col text-start'></th>
            </tr>
          </thead>
          <tbody>
            {data1.map((row, index) => (
              <tr key={index}>
                <td className='text-nowrap text-start  fs_14 fw-normal Usage-text-color red_ff'>{row.code}</td>
                <td className='text-nowrap text-start  fs_14 fw-normal Usage-text-color red_ff'>{row.date}</td>
                <td className='text-nowrap text-start  fs_14 fw-normal Usage-text-color red_ff'>{row.name}</td>
                <td className='text-nowrap text-start  fs_14 fw-normal Usage-text-color red_ff'>{row.company}</td>
                <td className='text-success fs_14 red_ff  text-start text-nowrap'>{row.status}</td>
                <td className='fs_14 red_ff fw-medium  text-start text-nowrap'>{row.amount}</td>
                <td>
                  <p className='action text-nowrap text-start  fs_14 fw-normal Usage-text-color red_ff'>
                    share <Image src={Share} alt='share' />
                  </p>
                </td>
                <td>
                  <p className='action text-nowrap text-start  fs_14 fw-normal Usage-text-color red_ff'>
                    download <Image src={download} alt='download' />
                  </p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      );
    } else if (selectedTab === 'Statements') {
      return (
        <table className='table'>
          <thead>
            <tr>
              <th scope='col' className='red-ff fs_16 fw-medium text-start Usage-text-color'>Description</th>
              <th scope='col' className='red-ff fs_16 fw-medium text-start Usage-text-color'>Date</th>
              <th scope='col' className='red-ff fs_16 fw-medium text-start Usage-text-color'>Total Usage</th>
              <th scope='col' className='red-ff fs_16 fw-medium text-start Usage-text-color'>Total Recharge</th>
              <th scope='col' className='red-ff fs_16 fw-medium text-start Usage-text-color'>Card Balance</th>
              <th scope='col' className='red-ff fs_16 fw-medium text-start Usage-text-color'></th>
              <th scope='col text-start'></th>
              <th scope='col text-start'></th>
            </tr>
          </thead>
          <tbody>
            {data2.map((row, index) => (
              <tr key={index}> 
                <td className='text-nowrap text-start  fs_14 fw-normal Usage-text-color red_ff'>{row.Description}</td>
                <td className='text-nowrap text-start  fs_14 fw-normal Usage-text-color red_ff'>{row.date}</td>
                <td className='text-nowrap text-start  fs_14 fw-normal Usage-text-color red_ff'>{row.TotalUsage}</td>
                <td className='text-nowrap text-start  fs_14 fw-normal Usage-text-color red_ff'>{row.Recharge}</td>
                <td className='text-success fs_14 red_ff  text-start text-nowrap'>{row.balance}</td>
                <td className='fs_14 red_ff fw-medium  text-start text-nowrap'></td>
                <td>
                  <p className='action text-nowrap text-start  fs_14 fw-normal Usage-text-color red_ff'>
                    share <Image src={Share} alt='share' />
                  </p>
                </td>
                <td>
                  <p className='action text-nowrap text-start  fs_14 fw-normal Usage-text-color red_ff'>
                    download <Image src={download} alt='download' />
                  </p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      );
    }
  };

  return (
    <>
      <div className="row">
        <div className="rounded-2 mt-4 py-md-3 px-md-4 p-3">
          <Row className="justify-content-between align-items-center">
            <div className="col-6">
              <Row className="d-none d-md-flex Usage-gap-lg-2">
                <Col sm={4} className="pe-0 text-center" onClick={() => handleTabClick('Usage')}>
                  <Nav.Link href="#" className=   {selectedTab === 'Usage' ? 'active-tab' : ''}>

                    <p className={`fs_24  fw-semibold  List-text-color m-0 p-0 ${selectedTab === 'Usage' ? 'color_blue' : ''}  `}>
                    Usage</p>
                  </Nav.Link>
                  <div className={`Usage-custom-margin border-1 border ${selectedTab === 'Usage' ? 'Usage-active' : ''}`} ></div>
                </Col>
                <Col sm={4} className="px-0 text-center" onClick={() => handleTabClick('TaxInvoice')}>
                  <Nav.Link href="#" className={selectedTab === 'TaxInvoice' ? 'active-tab' : ''}>
                    <p className={`fs_24  fw-semibold List-text-color red_ff m-0 p-0  text-nowrap ${selectedTab === 'TaxInvoice' ? 'color_blue' : ''} `}
                    >Tax Invoice</p>
                  </Nav.Link>
                  <div className={`Usage-custom-margin border-1 border ${selectedTab === 'TaxInvoice' ? 'Usage-active' : ''}`}></div>
                </Col>
                <Col sm={4} className="px-0 text-center" onClick={() => handleTabClick('Statements')}>
                  <Nav.Link href="#" className={selectedTab === 'Statements' ? 'active-tab' : ''}>
                    <p className={`fs_24  fw-semibold List-text-color red_ff m-0 p-0 ${selectedTab === 'Statements' ? 'color_blue' : ''}`}>Statements</p>

                  </Nav.Link>
                  <div className={`Usage-custom-margin border-1 border ${selectedTab === 'Statements' ? 'Usage-active' : ''}`}></div>
                </Col>
              </Row>

              <Form.Group className="position-relative d-md-none">
                <Form.Control
                  as="select"
                  value={selectedTab}
                  onChange={(e) =>
                    handleTabClick(e.target.value as 'Usage' | 'TaxInvoice' | 'Statements')
                  }
                  className="custom-select"
                >
                  <option value="Usage">Usage</option>
                  <option value="TaxInvoice">Tax Invoice</option>
                  <option value="Statements">Statements</option>
                </Form.Control>
                <div className="arrow-down"></div>
              </Form.Group>
            </div>
            <div className="col-6 d-flex gap-3 border-bottom border-2 px-0 justify-content-end">
              <Image className="mb-2" width={30} src={search} alt="Search" />
              <Image className="mb-2" width={30} src={bar} alt="Bar" />
            </div>
          </Row>
        </div>
      </div>

      <div className='table-responsive'>
        {renderTableData()}
      </div>
    </>
  );
};

export default UsagesList;