import React from "react";
import { Snackbar, Alert } from "@mui/material";

function AlertComponenet(props) {
  const { open, handleClose, severity } = props;
  return (
    <div>
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity={severity}>
          {props.message}
        </Alert>
      </Snackbar>
    </div>
  );
}

export default AlertComponenet;
