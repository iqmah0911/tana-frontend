import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Orna from "../Assets/Ornament.png";
import { SplitText } from "@cyriacbr/react-split-text";
import Icon from "../Assets/Group 1.png";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);
const meterTxt = {
  fontSize: "14px",
  fontWeight: "500",
  fontFamily: "Montserrat",
  lineHeight: "21px",
  color: "#ffffff",
};
const Title = {
  color: "#000000",
  fontWeight: "700",
  fontSize: "20px",
  lineHeight: "24.38px",
  fontFamily: "Montserrat",
};
const Sp = {
  color: "#8090A9",
  fontWeight: "500",
  fontSize: "16px",
  lineHeight: "19.05px",
  fontFamily: "Montserrat",
};
const Bank = {
  color: "#FFFFFF",
  fontWeight: "400",
  fontSize: "8px",
  lineHeight: "8px",
  fontFamily: "Montserrat",
};
const cardNum = {
  color: "#FFFFFF",
  fontWeight: "700",
  fontSize: "24px",
  lineHeight: "28.8px",
  fontFamily: "Montserrat",
  marginTop: "15px",
};
const cardName = {
  color: "#FFFFFF",
  fontWeight: "500",
  fontSize: "16px",
  lineHeight: "24px",
  fontFamily: "Montserrat",
  marginTop: "13px",
};

const Drag = {
  boxShadow: "0px 4px 30px 8px rgba(0, 0, 0, 0.08)",
};

const Meter = () => {
  return (
    <>
      <div className="container">
        <div className="row mt-5">
          <div className="mb-3">
            <h4 style={Title}>
              MY METERS <span style={Sp}>01</span>
            </h4>
          </div>
          <div className="col-md-5">
            <Card
              style={{
                backgroundImage: `url(${Orna})`,
                backgroundSize: "cover",
                backgroundColor: "#FB620B",
                borderRadius: "16px",
                backgroundRepeat: "no-repeat",
              }}
              sx={{ minWidth: 275 }}
            >
              <CardContent>
                <div
                  style={{ justifyContent: "space-between" }}
                  className="d-flex "
                >
                  <Typography
                    style={meterTxt}
                    color="text.secondary"
                    gutterBottom
                  >
                    Meter No
                  </Typography>
                  <Typography style={Bank} gutterBottom>
                    Bank <span style={meterTxt}>ZENITH</span>
                  </Typography>
                </div>

                <Typography className="mb-3" style={cardNum}>
                  **** **** **** 0329
                </Typography>
                <Typography style={meterTxt} gutterBottom>
                  A/C No
                </Typography>
                <Typography style={cardNum}>**** **** **** 0329</Typography>
                <Typography style={cardName}>
                  <SplitText>AYODEJI MARTINS</SplitText>
                </Typography>
              </CardContent>
            </Card>
          </div>
          <div className="col-md-7 ">
            <Card
              style={Drag}
              className="p-2"
              sx={{ minWidth: 275, minHeight: 230 }}
            >
              <div style={{ textAlign: "center" }}>
                <img className="text-center mt-5" src={Icon} alt="" />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default Meter;
