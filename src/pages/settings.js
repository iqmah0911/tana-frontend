import React from "react";
import Navbar from "../components/navbar";
import LeftNav from "../components/leftnav";
import Profile from "../components/profile"


const Settings = () => {
  return (
    <>
      <Navbar />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4 mt-5">
            <LeftNav />
          </div>

          <div className="col-md-8 mt-4 ">
            <Profile />
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Settings;