import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";

// Assets
import OthersLogo from "../assets/img/others-logo.png";

export default function NavigationBar() {
  return (
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
                  <Link color="inherit" href="About"> About </Link>  
                </Button> 
              </Grid> 
              <Grid item xs={6} md={2} sx={{ textAlign: "right", alignSelf: "center" }}> 
                <Button sx={{ 
                    color: "#fff", 
                    textTransform: "none", 
                    fontWeight: "bold", 
                  }}
                  >
                    <Link color="inherit" href="Contact"> Contact </Link> 
                </Button> 
              </Grid> 
            </Grid> 
            </Grid> 
          </Grid> 
        </Container> 
      </Toolbar> 
 </AppBar>
  );
}
