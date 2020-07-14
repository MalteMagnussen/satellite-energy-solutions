import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import CollaboratorCard from "./CollaboratorCard.jsx";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import CardHeader from "components/Card/CardHeader.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardFooter from "components/Card/CardFooter.js";

import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import Muted from "components/Typography/Muted.js";
// images
import CopernicusMissionPatch from "./collaborators/presskit/MissionPatch19.png";
import ParsecLogo from "./collaborators/presskit/2 PARSEC Accelerator LOGO official blue.png";
import SkylabIgnitePhoto from "./collaborators/presskit/skylab-ignite.PNG";
import EuropeanVentureProgrammeImage from "./collaborators/presskit/VentureProgramme.png";

import {
  cardTitle,
  cardSubtitle,
  cardLink,
} from "assets/jss/material-dashboard-react.js";
import cardImagesStyles from "assets/jss/material-dashboard-react/cardImagesStyles.js";

import august from "./img/August2.jpg";
import andreas from "./img/Andreas2.jpg";
import malte from "./img/Malte2.png";
import teamImg from "./img/team.jpeg";

const styles = {
  ...cardImagesStyles,
  cardTitle,
  cardSubtitle,
  cardLink,
};

const useStyles = makeStyles(styles);
export default function CardBasic() {
  const classes = useStyles();
  return (
    <>
      <GridContainer>
        <GridItem xs={12} sm={12} md={4}>
          <Card profile>
            <CardAvatar profile>
              <a href="#pablo" onClick={(e) => e.preventDefault()}>
                <img src={august} alt="August image" />
              </a>
            </CardAvatar>
            <CardBody profile>
              <h6 className={classes.cardCategory}>CO-FOUNDER</h6>
              <h4 className={classes.cardTitle}>August Zachariae</h4>
              <p className={classes.description}>
                Sustainable energy engineer educated at Technical University of
                Denmark. August began his career doing electricity price
                forecasting and economic feasibility studies in Copenhagen.
                August will use his skills in the field to make electricity
                price projections and production forecasts.
              </p>
              <Button
                color="info"
                round
                href="mailto:august_zachariae@hotmail.com"
              >
                august_zachariae@hotmail.com
              </Button>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card profile>
            <CardAvatar profile>
              <a href="#pablo" onClick={(e) => e.preventDefault()}>
                <img src={andreas} alt="Andreas image" />
              </a>
            </CardAvatar>
            <CardBody profile>
              <h6 className={classes.cardCategory}>CO-FOUNDER</h6>
              <h4 className={classes.cardTitle}>Andreas Stokholm</h4>
              <p className={classes.description}>
                As an educated electrical engineer from the Technical University
                of Denmark working at the space institute at the university.
                Andreas has had plenty of experience working with big data from
                satellites.
              </p>
              <Button color="info" round href="mailto:stokholm@space.dtu.dk">
                stokholm@space.dtu.dk
              </Button>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card profile>
            <CardAvatar profile>
              <a href="#pablo" onClick={(e) => e.preventDefault()}>
                <img src={malte} alt="Malte image" />
              </a>
            </CardAvatar>
            <CardBody profile>
              <h6 className={classes.cardCategory}>CO-FOUNDER</h6>
              <h4 className={classes.cardTitle}>Malte Hviid-Magnussen</h4>
              <p className={classes.description}>
                As a top student at Copenhagen Business Academy studying
                Computer Science, Malte maintains Tradewinds’ IT-systems and
                websites.
              </p>
              <Button
                color="info"
                round
                href="mailto:maltehviidmagnussen@gmail.com"
              >
                maltehviidmagnussen@gmail.com
              </Button>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={12} md={6}>
          <img
            className={classes.cardImgTop}
            alt="Image"
            style={{ height: "100%", width: "100%", display: "block" }}
            src={teamImg}
            data-holder-rendered="true"
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
          <h1>Meet the team</h1>
          <br></br>
          <h4 style={{ textAlign: "justify" }}>
            Tradewind is founded by a team of 3.
            <br />
            Two engineers and a computer scientist.
            <br /> Our diverse background covers: <br />
            <ul>
              <li>Energy system modelling</li>
              <li>Satellite big data management</li>
              <li>IT development</li>
            </ul>
          </h4>
        </GridItem>
      </GridContainer>

      <h1>Collaborators</h1>
      <h3>Accelerators we're a part of</h3>

      <GridContainer>
        <GridItem xs={12} sm={6} md={3}>
          <CollaboratorCard
            image={CopernicusMissionPatch}
            title={"Copernicus Accelerator"}
            joined={"Joined in Fall 2019"}
            text={{
              __html: `The Copernicus Accelerator prepares 50 of Europe’s boldest
    innovators for scalable success by creating a challenging, inspiring
    and supportive environment to learn and grow. The 12-month
    acceleration programme is designed explicitly for driven
    entrepreneurs and start-ups ready to turn their transformative
    business cases into impactful commercial solutions.`,
            }}
            link={"https://accelerator.copernicus.eu/"}
          />
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <CollaboratorCard
            image={ParsecLogo}
            title={"Parsec Accelerator"}
            joined={"Joined in January 2020"}
            text={{
              __html: `Tradewind has indirectly received funding from the European Union’s
              Horizon 2020 research and innovation program, via an Open Call issued and
              executed under project PARSEC (grant agreement No 824478)
              <br></br>
              The holistic two-stage acceleration programme will distribute a total of
              €2.5 Million equity-free funding to 100 beneficiaries, alongside other key
              resources (coaching, matchmaking, promotion) needed to develop and launch
              15 new products and services into the market. PARSEC will also provide a
              suite of
              <a
                href="https://parsec-accelerator.eu/business-catalysts/"
                target="_blank"
                rel="noopener noreferrer"
              >
                business catalysts
              </a>
              for transforming data into market-ready services. The first Open Call for
              applications was held between 20 September 2019 and 3 January 2020. The
              second Open Call will be launched in spring 2020.`,
            }}
            link={"https://parsec-accelerator.eu/"}
          />
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <CollaboratorCard
            image={SkylabIgnitePhoto}
            title={"Skylab Ignite"}
            joined={"Joined in February 2020"}
            text={{
              __html: `DTU Skylab Ignite is a 10 week early stage startup acceleration program
            suited for students and researchers. The program consists of individual
            1:1 team sessions with professional coaches, network building workshops
            with all participants together, and a final pitching event with 50.000
            DKK in prizes. There is a new round each semester, and each batch has 10
            top motivated high tech (pre)startups.
            <br /> <br />
            We are proud to announce that we won third place at the finals, in what
            was called the best group of candidates since the program began!
            <br />
            <a href="https://www.facebook.com/dtuskylab/posts/3784848301587171">
              Facebook Post announcing Winners.
            </a>
            <br />`,
            }}
            link={
              "https://www.skylab.dtu.dk/programmes-and-services/skylab_ignite"
            }
          />
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <CollaboratorCard
            image={EuropeanVentureProgrammeImage}
            title={"European Venture Programme"}
            joined={"Joined in July 2020"}
            text={{
              __html: `The European Venture Program (EVP) empowers student entrepreneurs by
              providing them with a valuable international network and toolkit from the
              EVP partners.
              <br />
              <br />
              DTU Skylab presents the European Venture Program for the second and final
              time. Student entrepreneurs gets an opportunity to scale their startup and
              international network. They will travel to all four EuroTech universities
              (DTU, EPFL, TU/e, TUM), and will participate in workshops and pitch
              sessions, get valuable insights from successful peers and visit startups
              as well as large corporations.
              <br />
              <br />
              This unique project will help the student entrepreneurs gain valuable
              experience among the best in the technical startup ecosystem and European
              technical institutions. The grand value of the project lies in knowledge
              sharing and creating a community of international entrepreneurs.`,
            }}
            link={
              "https://www.skylab.dtu.dk/programmes-and-services/skylab_ignite"
            }
          />
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card style={{ width: "24rem" }}>
            <CardBody>
              <h4 className={classes.cardTitle}>Climate Launchpad</h4>
              <Muted>
                <h6 className={classes.cardSubtitle}>Joined in June 2020</h6>
              </Muted>
              <p>
                <div
                  dangerouslySetInnerHTML={{
                    __html: `The future is green. To get there we need massive amounts of green ideas.
      Ideas that are put into action.
      <br />
      Starting a business is the most powerful way to do that. A business can
      grow based on customer needs and it can grow on a global scale. That is
      key to tackling climate change.
      <br />
      That’s why our motto is: ‘Fixing climate change, one start-up at a time.’
      <br />
      All change starts small. With passionate people. People who don’t wait for
      permission – or for the ‘right’ moment. People willing to explore and
      eager to act. Who are okay with being called crazy. People who believe in
      their idea and want to put it into action.
      <br />
      We believe in those people. We help them think, act and grow big. So they
      can help tackle climate change.`,
                  }}
                />
              </p>
              <Button
                color="info"
                href="https://climatelaunchpad.org/"
                target="_blank"
              >
                Visit them
              </Button>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </>
  );
}
