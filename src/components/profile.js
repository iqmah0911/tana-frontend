import React from "react";
import Pic from "../Assets/image 233.png";

const Title = {
  fontWeight: "600",
  fontFamily: "Montserrat",
  fontSize: "14px",
  lineHeight: "17.07px",
  color: "#000000",
};

const Span = {
  fontFamily: "Montserrat",
  fontWeight: "600",
  fontSize: "12px",
  lineHeight: "14.63px",
  color: "#8090A9",
};
const Sp = {
  color: "#000000",
  fontWeight: "500",
  fontSize: "16px",
  lineHeight: "19.05px",
  fontFamily: "Montserrat",
};

const Tit = {
  color: "#000000",
  fontWeight: "700",
  fontSize: "20px",
  lineHeight: "24.38px",
  fontFamily: "Montserrat",
};

const Profile = () => {
  return (
    <>
      <div className="container p-5">
        <div className="mb-3">
          <h4 style={Tit}>ACCOUNT SETTINGS</h4>
        </div>
        <div
          style={{ borderRadius: "14px", padding: "60px" }}
          className="bg-light "
        >
          <div className="row ">
            <div className="col-md-3">
              <img src={Pic} alt="" />
            </div>
            <div className="col-md-7 mt-4 ">
              <div className="row mb-3">
                <div className="col-md-7">
                  <p style={Title}>Ayodeji Martins</p>
                  <span style={Span}>Full Name</span>
                </div>
                <div className="col-md-4">
                  <p style={Title}>+2347065789441</p>
                  <span style={Span}>Phone Number</span>
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-md-7">
                  <p style={Title}>Ayodejimartins@yahoo.com</p>
                  <span style={Span}>Email</span>
                </div>
                <div className="col-md-4">
                  <p style={Title}>2224567890991</p>
                  <span style={Span}>BVN</span>
                </div>
              </div>
              <div className="row">
                <div className="col-md-7">
                  <p style={Title}>March 14, 1989</p>
                  <span style={Span}>Date of Birth</span>
                </div>
                <div className="col-md-5">
                  <p style={Title}>61, Odejayi, Surulere</p>
                  <span style={Span}>Address</span>
                </div>
              </div>
              {/* <div className="row">
                <div className="col-md-7">
                  <p style={Title}>Ayodeji Martins</p>
                  <span style={Span}>Full Name</span>
                </div>
                <div className="col-md-4">
                  <p style={Title}>+2347065789441</p>
                  <span style={Span}>Phone Number</span>
                </div>
              </div> */}
              {/* <div
                style={{ justifyContent: "space-between" }}
                className="d-flex mb-4 "
              >
                <div>
                  <p style={Title}>Ayodeji Martins</p>
                  <span style={Span}>Full Name</span>
                </div>
                <div>
                  <p style={Title}>+2347065789441</p>
                  <span style={Span}>Phone Number</span>
                </div>
              </div>

              <div
                style={{ justifyContent: "space-between" }}
                className="d-flex mb-4 "
              >
                <div>
                  <p style={Title}>Ayodejimartins@yahoo.com</p>
                  <span style={Span}>Email</span>
                </div>
                <div>
                  <p style={Title}>2224567890991</p>
                  <span style={Span}>BVN Number</span>
                </div>
              </div>

              <div
                style={{ justifyContent: "space-between" }}
                className="d-flex  "
              >
                <div>
                  <p style={Title}>March 14, 1989</p>
                  <span style={Span}>Date of Birth</span>
                </div>
                <div>
                  <p style={Title}>61, Odejayi, Surulere</p>
                  <span style={Span}>Address</span>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
