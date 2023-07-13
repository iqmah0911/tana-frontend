import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import modalImg from "../Assets/image 232.png";

const style = {
  position: "absolute",
  top: "50%",
  borderRadius: "10px",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  // border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
const Name = {
  color: "#000000",
  fontWeight: "600",
  fontSize: "16px",
  lineHeight: "19.5px",
  fontFamily: "Montserrat",
};
export default function BasicModal({ open, onClose, modalContent }) {
  // const [open, setOpen] = React.useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);
  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="text-center">
            <img src={modalImg} />
          </div>

          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <Typography style={Name} id="modal-modal-description" sx={{ mt: 2 }}>
                  {modalContent?.date}
                </Typography>
              </div>

              <div className="col-md-4">
                <Typography style={Name} id="modal-modal-description" sx={{ mt: 2 }}>
                  {modalContent?.amount}
                </Typography>
              </div>
            </div>
            <div className="row">
              <div className="col-md-8">
                <Typography style={Name} id="modal-modal-description" sx={{ mt: 2 }}>
                  <img src={modalContent?.disco} alt="...disco image" />
                </Typography>
              </div>

              <div className="col-md-4">
                <Typography style={Name} id="modal-modal-description" sx={{ mt: 2 }}>
                  {modalContent?.token}
                </Typography>
              </div>
            </div>
            <div className="row">
              <div className="col-md-8">
                <Typography style={Name} id="modal-modal-description" sx={{ mt: 2 }}>
                  {modalContent?.status}
                </Typography>
              </div>

              <div className="col-md-4">
                <Typography style={Name} id="modal-modal-description" sx={{ mt: 2 }}>
                  {modalContent?.meter}
                </Typography>
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
