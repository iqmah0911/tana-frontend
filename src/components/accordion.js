import React from "react";
import Card from "@mui/material/Card";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
// import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "./buttons";

const Drag = {
  boxShadow: "0px 4px 30px 8px rgba(0, 0, 0, 0.08)",
  borderRadius: "12px",
};

const AccText = {
  fontWeight: "600",
  fontFamily: "Montserrat",
  fontSize: "16px",
  lineHeight: "19.5px",
  color: "#000000",
};

const Acc = () => {
  return (
    <>
      <div className="container">
        <div className="row ">
          <div className="col-md-12 mt-5 ">
            <Card
              style={Drag}
              className="p-2"
              sx={{ minWidth: 275, minHeight: 230 }}
            >
              <div>
                <Accordion className="p-2">
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography style={AccText}>Select Disco</Typography>
                  </AccordionSummary>

                  <AccordionSummary className=" mt-4">
                    <Typography style={AccText}>Enter Meter No</Typography>
                  </AccordionSummary>

                  <AccordionSummary className=" mt-4">
                    <Typography style={AccText}>Ayodeji Martins</Typography>
                  </AccordionSummary>
                  <div className="text-center mt-4 mb-3">
                    <Button label="Submit" />
                  </div>
                </Accordion>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default Acc;
