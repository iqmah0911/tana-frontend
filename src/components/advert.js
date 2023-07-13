import { useMediaQuery } from "@mui/material";
import React from "react";
// import Bg from "../Assets/Group 1381.png"
import Group from "../Assets/groupcc.png";
import Tana from "../Assets/Tana-logo 6.png";
import Button from "./buttons.js";
import './navbar.css'

const Background = {
  color: "#000000",
  fontSize: "32px",
  fontWeight: "600",
  fontFamily: "Montserrat",
};
const Waltext = {
  color: "#000000",
  fontWeight: "400",
  fontSize: "13px",
  lineHeight: "17.07px",
  fontFamily: "Montserrat",
};
const Sp = {
  color: "#000000",
  fontWeight: "600",
  fontSize: "14px",
  lineHeight: "17.07px",
  fontFamily: "Helvetica",
};
const BB = {
  backgroundColor: "#F9F9F9",
  padding: "20px",
  borderRadius: "14px",
  position: "relative",
};
const advertSty = {
  position: "absolute",
  top: "107px",
  left: "860px",

};



const Advert = () => {
  return (
    <>
      <div className="container-fluid">
        <div style={BB}>
          <div className="mb-4">
            <img src={Tana} />
          </div>
          <div className="">
            <h5 style={Background}>Electricity Purchase</h5>
            <p style={Waltext}>
              Solutive Platform that cuts off queuing in{" "}
              <span style={Sp}> cashier's line</span>
            </p>
            <Button label="Learn more" />
          </div>
        </div>
        <div style={advertSty}>
        <img  className="img-adv" alt="" src={Group} />

        </div>
      </div>
    </>
  );
};

export default Advert;
