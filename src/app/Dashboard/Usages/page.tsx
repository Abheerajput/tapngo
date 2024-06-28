"use client";
import React, { useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import Image from 'next/image';
import UsagesList from './UsagesList';
import Chart from "chart.js";
import Group from "../../../../public/assets/images/svg/Group.svg";
import Layout from '@/app/components/Layout/Laytout';

declare global {
  interface Window {
    myBar: Chart;
  }
}

const Usages: React.FC = () => {
  useEffect(() => {
    const config = {
      type: "bar",
      data: {
        labels: [
          "January", "February", "March", "April", "May", "June",
          "July", "August", "September", "October", "November", "December",
        ],
        datasets: [
          {
            label: new Date().getFullYear().toString(),
            backgroundColor: "#FFCA00",
            data: [30, 78, 56, 34, 100, 45, 13, 23, 23, 24, 54, 65, 34, 23],
            fill: false,
            barThickness: 10,
          },
          {
            label: (new Date().getFullYear() - 1).toString(),
            backgroundColor: "#1364F1",
            data: [27, 68, 86, 74, 10, 4, 87, 46, 43, 65, 54, 93, 13],
            fill: false,
            barThickness: 10,
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        title: {
          display: false,
          text: "Orders Chart",
        },
        tooltips: {
          mode: "index",
          intersect: false,
        },
        hover: {
          mode: "nearest",
          intersect: true,
        },
        legend: {
          labels: {
            fontColor: "rgba(0,0,0,.4)",
          },
          align: "end",
          position: "bottom",
        },
        scales: {
          xAxes: [
            {
              display: true,
              scaleLabel: {
                display: true,
                labelString: "Month",
              },
              gridLines: {
                borderDash: [2],
                borderDashOffset: [2],
                color: "rgba(33, 37, 41, 0.3)",
                zeroLineColor: "rgba(33, 37, 41, 0.3)",
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: [2],
              },
              ticks: {
                fontColor: "rgba(0,0,0,.7)",
              },
            },
          ],
          yAxes: [
            {
              display: true,
              scaleLabel: {
                display: false,
                labelString: "Value",
              },
              gridLines: {
                borderDash: [2],
                drawBorder: false,
                borderDashOffset: [2],
                color: "rgba(33, 37, 41, 0.2)",
                zeroLineColor: "rgba(33, 37, 41, 0.15)",
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: [2],
              },
            },
          ],
        },
      },
    };

    const ctx = document.getElementById("bar-chart") as HTMLCanvasElement | null;
    if (ctx) {
      const context = ctx.getContext("2d");
      if (context) {
        window.myBar = new Chart(context, config);
      }
    }
  }, []);

  return (
    <Layout>
      <div className="bg-white mt-3 custom-padding rounded-2">
        <Row>
          <Col xs={12} md={8}>
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 rounded">
              <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
                <div className="flex flex-wrap items-center">
                  <div className="relative w-full max-w-full flex-grow flex-1">
                    <h6 className=" fs_24  red_ff mb-1  font-semibold">
                    Spending Overview
                    </h6>
                  </div>
                </div>
              </div>
              <div className="p-4 flex-auto">
                {/* Chart */}
                <div className="relative h-400-px">
                  <canvas id="bar-chart"></canvas>
                </div>
              </div>
            </div>
           
          </Col>
          <Col xs={12} lg={4}>
            <span className='fs_24 fw-semibold red_ff text-dark'>Usage Category</span>
            <Row xs={2} md={2} className="g-2">
              <Col lg={6} xs={6} className="p-2">
                <div className='border border-color ps-3 pt-2 text-dark'>
                  <p>Car-Wash</p>
                  <Image src={Group} alt="Car-Wash" />
                  <p className='fs_20 fw-semibold red_ff pt-3 text-dark'>$116</p>
                </div>
              </Col>
              <Col lg={6} xs={6} className="p-2">
                <div className='border text-dark border-color ps-3 pt-2  text-nowrap'>
                  <p>Laundry Shop</p>
                  <Image src={Group} alt="Laundry Shop" />
                  <p className='fs_20 fw-semibold red_ff pt-3 text-dark'>$116</p>
                </div>
              </Col>
              <Col lg={6} xs={6} className="p-2">
                <div className='border border-color ps-3 pt-2  text-dark text-nowrap'>
                  <p>Valet Service</p>
                  <Image src={Group} alt="Valet Service" />
                  <p className='fs_20 fw-semibold red_ff pt-3 text-dark'>$116</p>
                </div>
              </Col>
              <Col lg={6} xs={6} className="p-2">
                <div className='border border-color ps-2 pt-2  text-dark'>
                  <p>Ping-Pong</p>
                  <Image src={Group} alt="Ping-Pong" />
                  <p className='fs_20 fw-semibold red_ff pt-3 text-dark'>$116</p>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
        <UsagesList />
      </div>
    </Layout>
  );
};

export default Usages;

