import React, { useState } from "react";
import Dialog from "@mui/material/Dialog"; // Importing Dialog from Material-UI
import Stoppage from "./stoppage";

export function Parents() {
  const [openStoppageDialog, setOpenStoppageDialog] = useState(false);

  // Open dialog
  const openStoppage = () => {
    setOpenStoppageDialog(true);
  };

  // Close dialog
  const closeStoppage = () => {
    setOpenStoppageDialog(false);
  };

  return (
    <div>
      <div>
        <h2>I am the Stoppage component</h2>
        <button onClick={openStoppage}>Dialog-Popup</button>
      </div>
      
      <Dialog
        open={openStoppageDialog}
        onClose={closeStoppage} // Handles dialog close
        maxWidth="lg"
        PaperProps={{
          style: {
            overflow: "visible",
            minWidth: "800px", // Adjust width as needed
            minHeight: "680px",
            maxWidth: "800px",
          },
        }}
      >
        <div>
          <Stoppage closeDialog={closeStoppage} />
        </div>
      </Dialog>
    </div>
  );
}

export default Parents;
