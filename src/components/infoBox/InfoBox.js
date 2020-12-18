import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";

import "./InfoBox.css";

export const InfoBox = ({
  title,
  cases,
  isRed,
  isBlack,
  active,
  total,
  ...props
}) => {
  return (
    <Card
      onClick={props.onClick}
      className={`infoBox ${active && "infoBox--selected"} ${
        isRed && "infoBox--red"
      } ${isBlack && "infoBox--black"}`}
    >
      <CardContent>
        <Typography className="infoBox__title">{title}</Typography>
        <h2
          className={`infoBox__cases infoBox__cases--green ${
            isRed && "infoBox__cases--red"
          } ${isBlack && "infoBox__cases--black"}`}
        >
          {cases} <span>Today</span>
        </h2>
        <Typography className="infoBox__total">{total} Total</Typography>
      </CardContent>
    </Card>
  );
};
