import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

// This is the app/nav bar, changes depending on user

export default function NavigationBar(props) {
  return (
    <Box sx={{ flexGrow: 1, zIndex: "5" }}>
      <AppBar>
        <Toolbar>
          <Button
            href="/"
            sx={{
              "&:hover": {
                backgroundColor: "FF2800",
              },
              color: "white",
            }}
          >
            <Typography
              variant="h6"
              component="div"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Carsplain
            </Typography>
          </Button>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}></Box>

          <Box
            sx={{
              flexGrow: 0,
            }}
          >
            <Button href="/carplaints" color="inherit">
              View Post
            </Button>
            <Button href="/" color="inherit">
              Register
            </Button>
            <Button href="/" color="inherit">
              Login
            </Button>
            <Button href="/" color="inherit">
              Logout
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}