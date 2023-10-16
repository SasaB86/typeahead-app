import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";

function ItemCard({ item }) {
  return (
    <Card style={{ margin: "1rem" }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {item.title}
        </Typography>
        <Typography color="textSecondary">{item.body}</Typography>
      </CardContent>
    </Card>
  );
}

export default ItemCard;
