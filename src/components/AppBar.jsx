import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

// Assets
import OthersLogo from "../assets/img/others-logo.png";

export default function NavigationBar() {
  return (
    <AppBar position="relative" sx={{ bgcolor: "#1B1E23", boxShadow: "none" }}>
      <Toolbar>
        <img src={OthersLogo} alt="Others.ts" height="65" width="66" />
      </Toolbar>
    </AppBar>
  );
}
