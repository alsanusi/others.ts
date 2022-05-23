import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

export default function CTA() {
  return (
    <Card sx={{ bgcolor: "#1B1E23" }}>
      <CardContent sx={{ margin: 4 }}>
        <Grid container>
          <Grid item xs={6} md={6}>
            <Typography
              variant="h5"
              color="white"
              sx={{ fontFamily: "DM Serif Display, serif" }}
            >
              Pengen jadi siswa yang keren? <br />
              Yuk gabung Telkom School Sekarang!
            </Typography>
          </Grid>
          <Grid
            item
            xs={6}
            md={6}
            sx={{ textAlign: "right", alignSelf: "center" }}
          >
            <Button
              variant="outlined"
              sx={{
                color: "#fff",
                border: "1px solid #fff",
                textTransform: "none",
                fontWeight: "bold",
              }}
            >
              Gabung Sekarang
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
