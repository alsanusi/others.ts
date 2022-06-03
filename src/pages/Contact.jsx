import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

//component
import ContactForm from "../components/ContactForm";
import AppBar from "../components/AppBar";
import Footer from "../components/Footer";

const theme = createTheme();

export default function Contact() {
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
              Contact
            </Typography>
            <Typography variant="subtitle1" align="center" color="#787878">
              Punya kritik dan saran silahkan isi dibawah
            </Typography>
          </Container>
        </Box>
      </main>
      <ContactForm />
      <Container maxWidth="lg" sx={{ pb: 8 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={12}>
            <Typography variant="h5" align="right">
              others.ts@gmail.com
            </Typography>
          </Grid>
          <Grid item xs={12} md={12}>
            <Typography variant="h5" align="right">
              +62 123456789
            </Typography>
          </Grid>
          <Grid item xs={12} md={12}>
            <Typography variant="h5" align="right">
              SMK Telkom Makassar
            </Typography>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </ThemeProvider>
  );
}
