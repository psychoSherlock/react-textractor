import { AppBar, Toolbar, Typography } from "@mui/material";
import React from "react";

export default function Nav() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="title"
            color="inherit"
            fontFamily="sans-serif"
            fontWeight="normal"
            align="center"
          >
            🤓 TextRactor
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
