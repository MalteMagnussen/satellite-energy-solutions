import React, { useState, useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
import electricity2015 from "./biddingzones/2015electricity";
import { Line } from "react-chartjs-2";

const ChartFor2015Electricity = ({ zone }) => {
  const [show, setShow] = useState(false);
  const [chartData, setChartData] = useState({});
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const chart = () => {
    let data = [];
    if (zone && countries2015electricity.includes(zone)) {
      data = electricity2015[zone].map((integer) => Number(integer));
    }
    setChartData({
      labels: data,
      datasets: [
        {
          label: zone,
          data,
          backgroundColor: ["rgba(75, 192, 192, 0.6"],
          borderWidth: 4,
          pointRadius: 0,
        },
      ],
    });
  };
  useEffect(() => {
    chart();
  }, []);
  if (countries2015electricity.includes(zone)) {
    return (
      <>
        <br />
        <Button variant="info" onClick={handleShow}>
          2015 Electricity for {zone}
        </Button>
        <Modal centered show={show} onHide={handleClose} size="lg">
          <Modal.Header closeButton>
            <Modal.Title>
              Electricity prize per hour for 2015 for {zone}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Line
              data={chartData}
              options={{
                responsive: true,
                scales: {
                  yAxes: [
                    {
                      ticks: {
                        autoSkip: true,
                        maxTicksLimit: 0,
                      },
                      gridLines: {
                        display: false,
                      },
                    },
                  ],
                  xAxes: [
                    {
                      gridLines: { display: false },
                    },
                  ],
                },
              }}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  } else if (zone) {
    return (
      <>
        <br /> Zone Selected: {zone}
      </>
    );
  } else {
    return null;
  }
};

const countries2015electricity = [
  "BE",
  "DE",
  "DK1",
  "DK2",
  "FI",
  "FR",
  "NL",
  "NO1",
  "NO2",
  "NO3",
  "NO4",
  "NO5",
  "PL",
  "SE1",
  "SE2",
  "SE3",
  "SE4",
  "UK",
];
export default ChartFor2015Electricity;
