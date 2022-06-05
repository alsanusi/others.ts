import * as React from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

export default function ContactForm() {
  return (
    <Container maxWidth="lg" sx={{ pt: 10, pb: 10 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={12}>
          <Typography
            variant="h5"
            align="left"
            sx={{ fontFamily: "DM Serif Display, serif" }}
            gutterBottom
          >
            Name
          </Typography>
          <TextField
            label="Your Name"
            placeholder="Enter Your Name"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <Typography
            variant="h5"
            align="left"
            sx={{ fontFamily: "DM Serif Display, serif" }}
            gutterBottom
          >
            Email
          </Typography>
          <TextField
            label="Your Email"
            placeholder="Enter Your Email"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <Typography
            variant="h5"
            align="left"
            sx={{ fontFamily: "DM Serif Display, serif" }}
            gutterBottom
          >
            Message
          </Typography>
          <TextField
            label="Message"
            multiline
            rows={6}
            placeholder="Type your message here"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <Button
            variant="outlined"
            sx={{
              color: "#000",
              border: "1px solid #000",
              textTransform: "none",
              fontWeight: "bold",
            }}
          >
            Submit
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}
