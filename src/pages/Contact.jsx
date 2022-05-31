import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

//Assets
import OthersLogo from "../assets/img/others-logo.png";

const theme = createTheme();

export default function Index() {
    return(
        <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar position="relative" sx={{ bgcolor: "#1B1E23", boxShadow: "none" }}> 
      <Toolbar> 
      <Container maxWidth="lg"> 
          <Grid container> 
            <Grid item xs={6} md={6}> 
            <img src={OthersLogo} alt="Others.ts" height="65" width="66" /> 
            </Grid> 
            <Grid item xs={6} md={6}  sx={{ alignSelf: "center" }}> 
              <Grid container> 
              <Grid item xs={6} md={10} sx={{ textAlign: "right", alignSelf: "center" }}> 
                <Button sx={{ 
                    color: "#fff", 
                    textTransform: "none", 
                    fontWeight: "bold", 
                  }} 
                  > 
                  About 
                </Button> 
              </Grid> 
              <Grid item xs={6} md={2} sx={{ textAlign: "right", alignSelf: "center" }}> 
                <Button sx={{ 
                    color: "#fff", 
                    textTransform: "none", 
                    fontWeight: "bold", 
                  }} 
                  > 
                    About 
                </Button> 
              </Grid> 
            </Grid> 
            </Grid> 
          </Grid> 
        </Container> 
      </Toolbar> 
     </AppBar>
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
        <Container sx={{ py: 6 }} maxWidth="lg">
        <Grid container>
            <Grid item xs={12} md={12} sx={{ pb: 2 }}>
              <Typography
                variant="h5"
                sx={{ fontFamily: "DM Serif Display, serif" }}
              >
                Name
              </Typography>
            </Grid>
        <Card>
         <CardContent>
             <Grid container spacing={1}>
                 <Grid item  xs={12} >
                     <TextField label="Your Name" placeholder="Enter your name" variant ="outlined" fullWidth/>
                 </Grid>
             </Grid>
         </CardContent>
        </Card>
        </Grid>
        <Grid container>
            <Grid item xs={12} md={12} sx={{ pb: 2, pt: 4 }}>
              <Typography
                variant="h5"
                sx={{ fontFamily: "DM Serif Display, serif" }}
              >
                E-Mail
              </Typography>
            </Grid>
        <Card>
         <CardContent>
             <Grid container spacing={1}>
                 <Grid item  xs={12} >
                     <TextField label="Your Name" placeholder="Enter your name" variant ="outlined" fullWidth/>
                 </Grid>
             </Grid>
         </CardContent>
        </Card>
        </Grid>
        </Container>
        <Footer />
    </ThemeProvider>
    );
}