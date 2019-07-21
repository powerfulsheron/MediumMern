import React from "react";

import Snackbar from "@material-ui/core/Snackbar";
import { AlertContentComponent } from "./AlertContentComponent";

export default function AlertComponent({
  open = true,
  origin = { vertical: "top", horizontal: "right" },
  duration = 1000,
  variant = "success",
  message = "Default"
}) {
  function handleClose(event, reason) {
    if (reason === "clickaway") {
      return;
    }
  }

  return (
    <div>
      <Snackbar
        anchorOrigin={origin}
        open={open}
        autoHideDuration={duration}
        onClose={handleClose}
      >
        <AlertContentComponent
          onClose={handleClose}
          variant={variant}
          message={message}
        />
      </Snackbar>
    </div>
  );
}
