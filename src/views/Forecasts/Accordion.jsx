import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function SimpleAccordion({
  children,
  disabled,
  title,
  onChange,
}) {
  const classes = useStyles();

  if (disabled === true) {
    return (
      <div className={classes.root}>
        <Accordion disabled>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3a-content"
            id="panel3a-header"
          >
            <Typography className={classes.heading}>{title}</Typography>
          </AccordionSummary>
        </Accordion>
      </div>
    );
  } else {
    return (
      <div className={classes.root}>
        <Accordion onChange={onChange}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>{title}</Typography>
          </AccordionSummary>
          <AccordionDetails>{children}</AccordionDetails>
        </Accordion>
      </div>
    );
  }
}
