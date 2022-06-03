import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CardMedia from "@mui/material/CardMedia";

// Components
import AppBar from "../components/AppBar";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

const theme = createTheme();

export default function Detail() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar />
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 8,
          }}
        >
          <Container maxWidth="md">
            <Grid container spacing={2}>
              <Grid item xs={12} md={12}>
                <CardMedia
                  component="img"
                  height="500"
                  image="https://source.unsplash.com/random"
                  alt="random"
                  sx={{ pb: 3 }}
                />
                <Typography
                  variant="subtitle2"
                  align="center"
                  color="text.secondary"
                >
                  source: unsplash
                </Typography>
              </Grid>
              <Grid item xs={12} md={12}>
                <Typography
                  variant="h2"
                  align="center"
                  color="text.primary"
                  sx={{ fontFamily: "DM Serif Display, serif" }}
                >
                  Memilih foto yang cocok untuk desain website
                </Typography>
              </Grid>
              <Grid item xs={12} md={12}>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  align="center"
                  paragraph
                >
                  18 May 2022, Administrator
                </Typography>
              </Grid>
            </Grid>
          </Container>
        </Box>
        <Container sx={{ py: 3 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={2}>
            <Grid item xs={12} md={12}>
              <Typography
                variant="body1"
                color="text.secondary"
                align="justify"
                paragraph
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Metus dictum at tempor commodo ullamcorper a lacus vestibulum
                sed. Ut ornare lectus sit amet est placerat in egestas erat.
                Tincidunt nunc pulvinar sapien et ligula ullamcorper. Eu
                volutpat odio facilisis mauris. Turpis egestas sed tempus urna
                et pharetra pharetra. Gravida neque convallis a cras. Eu mi
                bibendum neque egestas congue. Aliquet lectus proin nibh nisl
                condimentum id venenatis a. Venenatis lectus magna fringilla
                urna porttitor rhoncus. Tortor pretium viverra suspendisse
                potenti nullam ac tortor vitae. Est velit egestas dui id ornare
                arcu odio ut sem. Eget felis eget nunc lobortis mattis. Nunc
                congue nisi vitae suscipit. Nec dui nunc mattis enim ut tellus.
                Sit amet dictum sit amet justo donec enim diam vulputate.
                Volutpat odio facilisis mauris sit. Elit sed vulputate mi sit
                amet mauris commodo quis imperdiet. Pretium aenean pharetra
                magna ac placerat.
              </Typography>
            </Grid>
            <Grid item xs={12} md={12}>
              <Typography
                variant="body1"
                color="text.secondary"
                align="justify"
                paragraph
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Metus dictum at tempor commodo ullamcorper a lacus vestibulum
                sed. Ut ornare lectus sit amet est placerat in egestas erat.
                Tincidunt nunc pulvinar sapien et ligula ullamcorper. Eu
                volutpat odio facilisis mauris. Turpis egestas sed tempus urna
                et pharetra pharetra. Gravida neque convallis a cras. Eu mi
                bibendum neque egestas congue. Aliquet lectus proin nibh nisl
                condimentum id venenatis a. Venenatis lectus magna fringilla
                urna porttitor rhoncus. Tortor pretium viverra suspendisse
                potenti nullam ac tortor vitae. Est velit egestas dui id ornare
                arcu odio ut sem. Eget felis eget nunc lobortis mattis. Nunc
                congue nisi vitae suscipit. Nec dui nunc mattis enim ut tellus.
                Sit amet dictum sit amet justo donec enim diam vulputate.
                Volutpat odio facilisis mauris sit. Elit sed vulputate mi sit
                amet mauris commodo quis imperdiet. Pretium aenean pharetra
                magna ac placerat.
              </Typography>
            </Grid>
          </Grid>
        </Container>
        <Container maxWidth="lg" sx={{ py: 8 }}>
          <CTA />
        </Container>
      </main>
      <Footer />
    </ThemeProvider>
  );
}
