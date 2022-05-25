import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Divider from "@mui/material/Divider";

// Components
import AppBar from "../components/AppBar";
import TeamCard from "../components/TeamCard";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

// Image
import AboutImg from "../assets/img/about.png";

// Data
import { teamData } from "../utils/teamData";

const theme = createTheme();

export default function Index() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar />
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: "#1B1E23",
            pt: "8%",
            pb: "10%",
          }}
        >
          <Container maxWidth="sm">
            <Typography
              variant="h2"
              align="center"
              color="white"
              sx={{ fontFamily: "DM Serif Display, serif" }}
            >
              About
            </Typography>
            <Typography variant="subtitle1" align="center" color="#787878">
              Know more about Others.ts
            </Typography>
          </Container>
        </Box>
        <Container sx={{ py: 6 }} maxWidth="lg">
          <Grid container>
            <Grid item xs={12} md={12}>
              <Typography
                variant="h3"
                sx={{ fontFamily: "DM Serif Display, serif" }}
              >
                Where we come together to create.
              </Typography>
            </Grid>
            <Grid item xs={12} md={12}>
              <Grid container>
                <Grid item xs={12} md={5} sx={{ alignSelf: "center", pt: 5 }}>
                  <Typography variant="subtitle1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec consequat mauris quis ex congue elementum. Suspendisse
                    lacinia malesuada nunc, eget pretium orci pharetra ut.
                    Aliquam non augue metus. Maecenas et ultricies odio. Ut
                    tristique, magna id pulvinarsdaxcvxcvnissnfjjsjsbfftq
                  </Typography>
                </Grid>
                <Grid item xs={12} md={7} sx={{ textAlign: "center", pt: 5 }}>
                  <img src={AboutImg} alt="Others.ts" width="70%" />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={12} sx={{ pt: 10 }}>
              <Divider />
            </Grid>
          </Grid>
        </Container>
        <Container sx={{ py: 6 }} maxWidth="lg">
          <Grid container>
            <Grid item xs={12} md={12} sx={{ pb: 5 }}>
              <Typography
                variant="h3"
                sx={{ fontFamily: "DM Serif Display, serif" }}
              >
                Team Profile
              </Typography>
            </Grid>
            <Grid item xs={12} md={12}>
              <Grid container spacing={4}>
                {teamData.map((x) => (
                  <Grid item key={x.id} xs={12} sm={6} md={4}>
                    <TeamCard name={x.name} position={x.position} />
                  </Grid>
                ))}
              </Grid>
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
