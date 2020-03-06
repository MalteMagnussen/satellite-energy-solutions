import React, { useState } from "react";
import {
  Row,
  Col,
  Card,
  Button,
  Media,
  Modal,
  Image,
  Carousel
} from "react-bootstrap";
import Flyer_page_001 from "./posters/Flyer-page-001.jpg";
import Flyer_page_002 from "./posters/Flyer-page-002.jpg";
import Flyer from "./posters/Flyer.pdf";
import Posters_page_001 from "./posters/Posters-page-001.jpg";
import Posters_page_002 from "./posters/Posters-page-002.jpg";
import Posters_page_003 from "./posters/Posters-page-003.jpg";
import Posters from "./posters/Posters.pdf";

const dimensions = 250; //64

const MyMedia = () => {
  return (
    <>
      <div style={{ marginLeft: "50px" }}>
        <h1>Our Media</h1>
        <Row>
          <Col sm={6}>
            <PosterMedia />
            <br />
            <FlyerMedia />
          </Col>
          <Col sm={5}>
            <YouTubeVideo />
          </Col>
        </Row>
        <br />
        <br />
        <br />
        <br />
      </div>
    </>
  );
};

const YouTubeVideo = () => {
  return (
    <>
      <Card border="light">
        <Card.Body>
          <Card.Title>
            <iframe
              title="unique title property"
              width="560"
              height="315"
              src="https://www.youtube-nocookie.com/embed/qSmpEQlhITY"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </Card.Title>
          <Card.Text>
            <h4>Application video for the Danish Innovation Price</h4>
          </Card.Text>
          <Button
            variant="primary"
            href="https://www.via.dk/kampagner/innovationsprisen"
            target="_blank"
            rel="noopener noreferrer"
          >
            Innovation Price website
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

const FlyerMedia = () => {
  const [show, setShow] = useState(false);
  const myFlyers = [Flyer_page_001, Flyer_page_002];
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Media>
        <img
          onClick={handleShow}
          width={dimensions}
          height={dimensions * 1.4}
          className="align-self-center mr-3"
          src={Flyer_page_001}
          alt="Our Flyer Placeholder"
        />
        <Media.Body>
          <h5>Our Flyers</h5>
          <p>Click photo to see slideshow.</p>
          <p>Originally made for the opening of Digilabs at Skylabs DTU.</p>
          <Button variant="primary" href={Flyer} download>
            Download PDF.
          </Button>
        </Media.Body>
      </Media>

      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={show}
        onHide={handleClose}
        animation={false}
      >
        <PosterCarousel images={myFlyers} />
      </Modal>
    </>
  );
};

const PosterMedia = () => {
  const [show, setShow] = useState(false);
  const myPosters = [Posters_page_001, Posters_page_002, Posters_page_003];
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Media>
        <img
          onClick={handleShow}
          width={dimensions}
          height={dimensions * 1.4}
          className="align-self-center mr-3"
          src={Posters_page_001}
          alt="Our Poster Placeholder"
        />
        <Media.Body>
          <h5>Our Posters</h5>
          <p>Click photo to see slideshow.</p>
          <p>Originally made for the opening of Digilabs at Skylabs DTU.</p>
          <Button variant="primary" href={Posters} download>
            Download PDF.
          </Button>
        </Media.Body>
      </Media>

      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={show}
        onHide={handleClose}
        animation={false}
      >
        <PosterCarousel images={myPosters} />
      </Modal>
    </>
  );
};

const PosterCarousel = ({ images }) => {
  return (
    <>
      <Carousel interval="5000">
        {images.map(image => (
          <Carousel.Item>
            <Image className="d-block w-100" src={image} alt="" fluid />
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
};

export default MyMedia;
