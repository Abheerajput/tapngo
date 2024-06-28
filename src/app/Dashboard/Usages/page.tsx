"use client"
import ReactApexChart from 'react-apexcharts';
import dynamic from 'next/dynamic';
import { Row, Col } from 'react-bootstrap';
import Image from 'next/image';
import { useEffect } from 'react';
import { ApexOptions } from 'apexcharts';
import UsagesList from './UsagesList';
import Group from "../../../../public/assets/images/svg/Group.svg";
import Layout from '@/app/components/Layout/Laytout';

const Usages: React.FC = () => {

 
  
//   const barSeries = [
//     {
//       name: 'Net Profit',
//       data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
//       color: '#1364F1',
//     },
//     {
//       name: 'Revenue',
//       data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
//       color: '#FFCA00',
//     },
//   ];

//   const barOptions: ApexOptions = {
//     chart: {
//       type: 'bar',
//       height: 356,
//       toolbar: {
//         show: false,
//       },
//     },
//     plotOptions: {
//       bar: {
//         horizontal: false,
//         columnWidth: '55%',
//       },
//     },
//     dataLabels: {
//       enabled: false,
//     },
//     stroke: {
//       show: true,
//       width: 2,
//       colors: ['transparent'],
//     },
//     xaxis: {
//       categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
//       labels: {
//         show: true,
//         style: {
//           fontSize: '10px',
//         },
//       },
//     },
//     fill: {
//       opacity: 1,
//     },
//     tooltip: {
//       y: {
//         formatter: function (val) {
//           return "$ " + val + " thousands";
//         },
//       },
//     },
//     annotations: {
//       xaxis: [],
//     },
//     legend: {
//       position: 'top',
//       horizontalAlign: 'left',
//     },
//   };

// if (typeof window == "undefined") {
//    return;
// }

  return (
    // <Layout>
    //   <div className='bg-white custom-padding rounded-2'>
    //     <Row>
    //       <Col xs={12} md={8}>
    //         <span className='fs_24 fw-semibold red_ff text-dark'>Spending Overview</span>
    //         <div className='p-2'>
    //           <div className="chart-container">
    //             <ReactApexChart options={barOptions} series={barSeries} type="bar" height={350} />
    //           </div>
    //         </div>
    //       </Col>
    //       <Col xs={12} lg={4}>
    //         <span className='fs_24 fw-semibold red_ff text-dark'>Usage Category</span>
    //         <Row xs={2} md={2} className="g-2">
    //           <Col lg={6} xs={6} className="p-2">
    //             <div className='border border-color ps-3 pt-2 p-3 text-dark'>
    //               <p>Car-Wash</p>
    //               <Image src={Group} alt="Car-Wash" />
    //               <p className='fs_20 fw-semibold red_ff pt-3 text-dark'>$116</p>
    //             </div>
    //           </Col>
    //           <Col lg={6} xs={6} className="p-2">
    //             <div className='border text-dark border-color ps-3 pt-2 p-3 text-nowrap'>
    //               <p>Laundry Shop</p>
    //               <Image src={Group} alt="Laundry Shop" />
    //               <p className='fs_20 fw-semibold red_ff pt-3 text-dark'>$116</p>
    //             </div>
    //           </Col>
    //           <Col lg={6} xs={6} className="p-2">
    //             <div className='border border-color ps-3 pt-2 p-3 text-dark text-nowrap'>
    //               <p>Valet Service</p>
    //               <Image src={Group} alt="Valet Service" />
    //               <p className='fs_20 fw-semibold red_ff pt-3 text-dark'>$116</p>
    //             </div>
    //           </Col>
    //           <Col lg={6} xs={6} className="p-2">
    //             <div className='border border-color ps-2 pt-2 p-3 text-dark'>
    //               <p>Ping-Pong</p>
    //               <Image src={Group} alt="Ping-Pong" />
    //               <p className='fs_20 fw-semibold red_ff pt-3 text-dark'>$116</p>
    //             </div>
    //           </Col>
    //         </Row>
    //       </Col>
    //     </Row>
    //     <UsagesList />
    //   </div>
    // </Layout>
    <></>
  );
};

export default Usages;

