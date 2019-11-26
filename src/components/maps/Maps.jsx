import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import eu100m from "./weaterImages/EUAvg2018100m.png";
import eu150m from "./weaterImages/EUAvg2018150m.png";
import euHrAvg from "./weaterImages/EUHourAvgV1642018100m.png";

const Maps = () => {
  const headlineStyle = { marginLeft: "50px" };
  return (
    <>
      <h2 style={headlineStyle}>Result Examples</h2>
      <h3 style={headlineStyle}>[Under Construction]</h3>
      <CopernicusCarousel />
    </>
  );
};

export default Maps;

const CopernicusCarousel = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(null);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    setDirection(e.direction);
  };

  return (
    <div style={{ width: "40%", height: "40%", marginLeft: "50px" }}>
      <Carousel
        activeIndex={index}
        direction={direction}
        onSelect={handleSelect}
      >
        <Carousel.Item>
          <img className="d-block w-100" src={eu100m} alt="First slide" />
          <Carousel.Caption>
            <h3>100m</h3>
            <p>Europe Hour Average, 2018, 100m.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={eu150m} alt="Second slide" />
          <Carousel.Caption>
            <h3>150m</h3>
            <p>Europe Hour Average, 2018, 150m.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={euHrAvg} alt="Third slide" />
          <Carousel.Caption>
            <h3>Vestas 164</h3>
            <p>Europe Hour Average for Vestas 164, 2018 at 100m.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
