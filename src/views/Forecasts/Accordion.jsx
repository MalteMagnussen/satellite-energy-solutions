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
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>{title}</Typography>
          </AccordionSummary>
        </Accordion>
      </div>
    );
  } else {
    return (
      <div className={classes.root}>
        <Accordion
          onChange={onChange}
          TransitionProps={{ unmountOnExit: true }}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>{title}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div className={classes.root}>{children}</div>
          </AccordionDetails>
        </Accordion>
      </div>
    );
  }
}
