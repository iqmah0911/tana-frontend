import { color } from "@mui/system";
import React from "react";

const buttonStyle = {
  //   margin: '10px 0',
  color: "white",
  backgroundColor: "black",
  borderRadius: "10px",
  fontSize: "14px",
  fontWeight: "600",
  fontFamily: "Montserrat",
  padding: "10px",
  width: "18%",
};

const Button = ({ label, handleClick }) => (
  <button className="btn" style={buttonStyle} onClick={handleClick}>
    {label}
  </button>
);

export default Button;
