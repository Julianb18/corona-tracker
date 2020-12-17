import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";

import "./InfoBox.css";

export const InfoBox = ({ title, cases, active, total, ...props }) => {
  return (
    <Card onClick={props.onClick} className="infoBox">
      <CardContent>
        <Typography className="infoBox__title" color="textSecondary">
          {title}
        </Typography>
        <h2 className="infoBox__cases">{cases}</h2>
        <Typography className="infoBox__total">{total} Total</Typography>
      </CardContent>
    </Card>
  );
};
