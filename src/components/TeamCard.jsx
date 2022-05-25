import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function TeamCard({ ...props }) {
  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        boxShadow: "none",
      }}
    >
      <CardMedia
        component="img"
        height="250"
        image="https://source.unsplash.com/random"
        alt="random"
      />
      <CardContent sx={{ flexGrow: 1, padding: 0, paddingTop: 3 }}>
        <Typography
          gutterBottom
          variant="h5"
          align="center"
          sx={{ fontFamily: "DM Serif Display, serif" }}
        >
          {props.name}
        </Typography>
        <Typography align="center" variant="h6">
          {props.position}
        </Typography>
      </CardContent>
    </Card>
  );
}
