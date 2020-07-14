import React, { useState, useEffect } from "react";
import electricity2015 from "./biddingzones/2015electricity";
import { Line } from "react-chartjs-2";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import ShowChartIcon from "@material-ui/icons/ShowChart";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function TransitionsModal({ zone }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [chartData, setChartData] = useState({});

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
      <div>
        <Button
          variant="contained"
          onClick={handleOpen}
          className={classes.button}
          startIcon={<ShowChartIcon />}
        >
          {zone} 2015 Electricity Load
        </Button>
        <Button
          variant="outlined"
          color="primary"
          size="small"
          className={classes.button}
          startIcon={<SaveIcon />}
          href="./files/2015.csv"
          download
        >
          Download as csv
        </Button>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <div className={classes.paper}>
              <h2 id="transition-modal-title">
                {" "}
                Electricity load in MWh per hour for 2015 for {zone}
              </h2>
              <p id="transition-modal-description">
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
              </p>
            </div>
          </Fade>
        </Modal>
      </div>
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
}

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
