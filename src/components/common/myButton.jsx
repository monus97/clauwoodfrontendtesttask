import React from "react";
import Button from "@mui/material/Button";

const MyButton = ({ onClick, children }) => (
  <Button variant="contained" onClick={onClick}>
    {children}
  </Button>
);

export default MyButton;
