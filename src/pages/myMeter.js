import React from "react";
import Navbar from "../components/navbar";
import LeftNav from "../components/leftnav";
import Meter from "../components/meter";
import Acc from "../components/accordion";

const Transaction = () => {
  return (
    <>
      <Navbar />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4 mt-5">
            <LeftNav />
          </div>

          <div className="col-md-8">
            <div className="mb-5">
              <Meter />
            </div>
            <Acc />
          </div>
        </div>
      </div>
    </>
  );
};

export default Transaction;
