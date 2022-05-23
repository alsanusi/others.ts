import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

export default function BlogCard({ ...props }) {
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
        height="200"
        image="https://source.unsplash.com/random"
        alt="random"
      />
      <CardContent sx={{ flexGrow: 1, padding: 0, paddingTop: 1.5 }}>
        <Grid container sx={{ marginBottom: 2 }}>
          <Grid item xs={6} md={8}>
            <div style={{ display: "flex", alignSelf: "center" }}>
              <CalendarTodayIcon size="small" sx={{ mr: 1 }} />
              <Typography variant="body2" sx={{ alignSelf: "center" }}>
                {props.date}
              </Typography>
            </div>
          </Grid>
          <Grid item xs={6} md={4}>
            <Typography
              gutterBottom
              variant="body2"
              sx={{ textAlign: "right" }}
            >
              {props.writer}
            </Typography>
          </Grid>
        </Grid>
        <Typography
          gutterBottom
          variant="h5"
          sx={{ fontFamily: "DM Serif Display, serif" }}
        >
          {props.title}
        </Typography>
        <Typography variant="subtitle2">{props.description}</Typography>
      </CardContent>
    </Card>
  );
}
