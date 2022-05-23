import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

// Components
import AppBar from "../components/AppBar";
import BlogCard from "../components/BlogCard";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

// Data
import { indexData } from "../utils/indexData";

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
            bgcolor: "background.paper",
            pt: 8,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              variant="h2"
              align="center"
              color="text.primary"
              sx={{ fontFamily: "DM Serif Display, serif" }}
            >
              Other.ts Blog
            </Typography>
            <Typography
              variant="h6"
              align="center"
              color="text.secondary"
              paragraph
            >
              Wednesday, 18 May 2022
            </Typography>
          </Container>
        </Box>
        <Container sx={{ py: 6 }} maxWidth="lg">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {indexData.map((x) => (
              <Grid item key={x.id} xs={12} sm={6} md={4}>
                <BlogCard
                  date={x.date}
                  writer={x.writer}
                  title={x.title}
                  description={x.description}
                />
              </Grid>
            ))}
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
