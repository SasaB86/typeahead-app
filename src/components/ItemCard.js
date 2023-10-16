import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import React from "react";

function ItemCard({ item: { title, body } }) {
  return (
    <Card style={{ margin: "1rem" }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography color="textSecondary">{body}</Typography>
      </CardContent>
    </Card>
  );
}

export default ItemCard;
