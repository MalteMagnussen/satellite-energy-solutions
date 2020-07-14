import React from "react";
import { makeStyles } from "@material-ui/core/styles";

// core components
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import Muted from "components/Typography/Muted.js";

import {
  cardTitle,
  cardSubtitle,
  cardLink,
} from "assets/jss/material-dashboard-react.js";
import cardImagesStyles from "assets/jss/material-dashboard-react/cardImagesStyles.js";

const styles = {
  ...cardImagesStyles,
  cardTitle,
  cardSubtitle,
  cardLink,
};

const useStyles = makeStyles(styles);

export default function CollaboratorCard({ image, title, joined, text, link }) {
  const classes = useStyles();
  return (
    <>
      <Card style={{ width: "24rem" }}>
        <img
          className={classes.cardImgTop}
          alt="Image"
          style={{ height: "100%", width: "100%", display: "block" }}
          src={image}
          data-holder-rendered="true"
        />
        <CardBody>
          <h4 className={classes.cardTitle}>{title}</h4>
          <Muted>
            <h6 className={classes.cardSubtitle}>{joined}</h6>
          </Muted>
          <p>
            <div dangerouslySetInnerHTML={text} />
          </p>
          <Button color="info" href={link} target="_blank">
            Visit them
          </Button>
        </CardBody>
      </Card>
    </>
  );
}
