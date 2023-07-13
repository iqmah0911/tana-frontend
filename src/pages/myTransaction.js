import React from "react";
import Navbar from "../components/navbar";
import LeftNav from "../components/leftnav";
import DataTable from "../components/table";

const rows = [
  {
    id: 1,
    date: "Snow",
    meter: "Jon",
    amount: 35,
    disco: "https://i.ibb.co/4Jx6P6P/image-17.png",
    token: "token",
    status: "status",
  },
  {
    id: 2,
    date: "Lannister",
    meter: "Cersei",
    amount: 42,
    disco: "https://i.ibb.co/4Jx6P6P/image-17.png",
    token: "token",
    status: "status",
  },
  {
    id: 3,
    date: "Lannister",
    meter: "Jaime",
    amount: 45,
    disco: "https://i.ibb.co/4Jx6P6P/image-17.png",
    token: "token",
    status: "status",
  },
  {
    id: 4,
    date: "Stark",
    meter: "Arya",
    amount: 16,
    disco: "https://i.ibb.co/4Jx6P6P/image-17.png",
    token: "token",
    status: "status",
  },
  {
    id: 5,
    date: "Targaryen",
    meter: "Enerys",
    amount: 89,
    disco: "https://i.ibb.co/4Jx6P6P/image-17.png",
    token: "token",
    status: "status",
  },
  {
    id: 6,
    date: "Melisandre",
    meter: "zlatan",
    amount: 150,
    disco: "https://i.ibb.co/4Jx6P6P/image-17.png",
    token: "token",
    status: "status",
  },
  {
    id: 7,
    date: "Clifford",
    meter: "Ferrara",
    amount: 4,
    disco: "https://i.ibb.co/4Jx6P6P/image-17.png",
    token: "token",
    status: "status",
  },
  {
    id: 8,
    date: "Frances",
    meter: "Rossini",
    amount: 36,
    disco: "https://i.ibb.co/4Jx6P6P/image-17.png",
    token: "token",
    status: "status",
  },
  {
    id: 9,
    date: "Roxie",
    meter: "Harvey",
    amount: 65,
    disco: "https://i.ibb.co/4Jx6P6P/image-17.png",
    token: "token",
    status: "status",
  },
];

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
            <div className="mt-5">
              <div className=" container mb-3">
                <h4 style={Title}>
                  TRANSACTIONS <span style={Sp}>65</span>
                </h4>
              </div>
              <DataTable
                height={787}
                width={"100%"}
                rows={rows}
                pageSize={9}
                rowsPerPageOptions={[9]}
                checkboxSelection
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Transaction;
