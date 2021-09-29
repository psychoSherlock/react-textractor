import React, { useState } from "react";
import { Box } from "@mui/system";
import { Modal, Typography } from "@mui/material";

function Popup(props) {
  const [open, setOpen] = useState(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "#0288d1",
            border: "2px solid #222",
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            p: 2,
            maxHeight: "70vh",
            overflow: "auto",
          }}
        >
          <Typography variant="h6" id="modal-modal-description">
            Here you GO!
          </Typography>
          <Typography
            id="modal-modal-description"
            sx={{ mt: 2, color: "#fff" }}
          >
            {props.text}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

export default Popup;
