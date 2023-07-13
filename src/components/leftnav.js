import React from "react";
import Spark from "../Assets/Group 1290.png";
import Photo from "../Assets/image 230 (1).png";
import Sign from "../Assets/sign.png";
import Credit from "../Assets/Credit Card.png";
import Visa from "../Assets/credit card2.png";
import Crad from "../Assets/Crad.png";

const paper = {
  background: "#FFFFFF",
  boxShadow: "0px 4px 30px 8px rgba(0, 0, 0, 0.08)",
  borderRadius: " 12px",
  padding: "7px",
};

const Name = {
  color: "#000000",
  fontWeight: "600",
  fontSize: "16px",
  lineHeight: "19.5px",
  fontFamily: "Montserrat",
};
const Amount = {
  color: "#000000",
  fontWeight: "700",
  fontSize: "25px",
  lineHeight: "34.5px",
  fontFamily: "Helvetica",
};

const Add = {
  color: "#3D88F8",
  fontWeight: "600",
  lineHeight: "17.07px",
  fontFamily: "Montserrat",
  fontSize: "14px",
};

const Wallet = {
  backgroundColor: "#F6F5F0",
  padding: "30px",
  borderRadius: " 12px",
};
const Title = {
  color: "#000000",
  fontWeight: "700",
  fontSize: "14px",
  lineHeight: "17.07px",
  fontFamily: "Montserrat",
};
const Sp = {
  color: "#8090A9",
  fontWeight: "500",
  fontSize: "16px",
  lineHeight: "19.05px",
  fontFamily: "Montserrat",
};

const Waltext = {
  color: "#000000",
  fontWeight: "700",
  fontSize: "15px",
  lineHeight: "17.07px",
  fontFamily: "Montserrat",
};
const Parent = {
  position: "relative",
  top: "0",
  left: "0",
};
const creditSty = {
  position: "relative",
  top: "0",
  left: "0",
};
const visaSty = {
  position: "absolute",
  top: "50px",
  left: "0",
};

const cradSty = {
  position: "absolute",
  top: "180px",
  left: "0",
};
const cardNum = {
  position: "absolute",
  top: "220px",
  left: "60px",
};

const Num = {
  color: "#ffffff",
  fontWeight: "500",
  fontSize: "16px",
  lineHeight: "17.84px",
};
const LeftNav = () => {
  return (
    <>
      <div className="container">
        <div className="">
          <div className="">
            <div style={paper}>
              <div className="d-flex align-items-center ">
                <div style={{ marginRight: "20px" }}>
                  <img src={Spark} alt="" />
                </div>
                <div className="mt-2">
                  <h5 style={Name}>Ayodeji Martins</h5>
                </div>
              </div>
            </div>

            <div className="d-flex align-item-center mt-4">
              <div style={{ marginRight: "20px" }}>
                <img src={Sign} alt="" />
              </div>
              <div className="mt-1">
                <p style={Add}>Add new meter</p>
              </div>
            </div>

            <div className="mt-4 p-4" style={Wallet}>
              <div>
                <h5 style={Waltext}>WALLET BALANCE</h5>
              </div>
              <div className="p-2 mt-4 mb-4" style={paper}>
                <div className="d-flex align-items-center ">
                  <div style={{ marginRight: "20px" }}>
                    <img src={Photo} alt="" />
                  </div>
                  <div className="mt-2">
                    <h5 style={Amount}> {"\u20A6"} 25,000.00</h5>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-5">
              <h4 style={Title}>
                CARDS <span style={Sp}>01</span>
              </h4>
            </div>

            <div style={Parent}>
              <img style={creditSty} src={Credit} alt="" />
              <img style={visaSty} src={Visa} alt="" />
              <img style={cradSty} src={Crad} alt="" />
              <div style={cardNum}>
                <h4 style={Num}>4556 3325 8590 3732</h4>
                <h4 style={Num}>09/23</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeftNav;
