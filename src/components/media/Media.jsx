import React, { useState } from "react";
import {
  // Row,
  // Col,
  Card,
  Button,
  // Media,
  Modal,
  Image,
  Carousel,
  CardColumns
} from "react-bootstrap";
import Flyer_page_001 from "./posters/Flyer-page-001.jpg";
import Flyer_page_002 from "./posters/Flyer-page-002.jpg";
import Flyer from "./posters/Flyer.pdf";
import Posters_page_001 from "./posters/Posters-page-001.jpg";
import Posters_page_002 from "./posters/Posters-page-002.jpg";
import Posters_page_003 from "./posters/Posters-page-003.jpg";
import Posters from "./posters/Posters.pdf";

const dimensions = { width: "60%", height: "60%" };

const MyMedia = () => {
  return (
    <>
      <div style={{ margin: 20 }}>
        <h1 className="text-center">Our Media</h1>
        <CardColumns>
          <CustomMedia
            flyers={[Flyer_page_001, Flyer_page_002]}
            title="Our Flyers"
            text={(() => (
              <>
                <p>Click photo to see slideshow.</p>
                <p>
                  Originally made for the opening of Digilabs at Skylabs DTU.
                </p>
              </>
            ))()}
            myDownload={Flyer}
          />
          <CustomMedia
            flyers={[Posters_page_001, Posters_page_002, Posters_page_003]}
            title="Our Posters"
            text={(() => (
              <>
                <p>Click photo to see slideshow.</p>
                <p>
                  Originally made for the opening of Digilabs at Skylabs DTU.
                </p>
              </>
            ))()}
            myDownload={Posters}
          />
          <Card>
            <YouTubeVideo />
          </Card>
        </CardColumns>

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
      <Card className="text-center" border="light">
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
          <br />
          <small className="text-muted">We reached the semi-finals.</small>
        </Card.Body>
      </Card>
    </>
  );
};

const CustomMedia = ({ flyers, title, text, myDownload }) => {
  const [show, setShow] = useState(false);
  const myImages = [...flyers];
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Card className="text-center">
        <Card.Img
          variant="top"
          onClick={handleShow}
          style={dimensions}
          className="align-self-center mr-3"
          src={myImages[0]}
          alt="Our Flyer Placeholder"
        />

        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {text}
            <Button variant="primary" href={myDownload} download>
              Download PDF.
            </Button>
          </Card.Text>
          <Card.Text>
            <small className="text-muted">
              Was made before our name-change to Tradewind
            </small>
          </Card.Text>
        </Card.Body>
      </Card>

      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={show}
        onHide={handleClose}
        animation={false}
      >
        <PosterCarousel images={myImages} />
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
