import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import Stoppage from "./stoppage";
import styles from "./parents.module.css";
import FormPage from "./formPage";

export function Parents() {
  const [openStoppageDialog, setOpenStoppageDialog] = useState(false);
  const [openForm, setOpenForm] = useState(false);

  // Open dialog
  const openStoppage = () => {
    setOpenStoppageDialog(true);
  };
  
  // Close dialog
  const closeStoppage = () => {
    setOpenStoppageDialog(false);
  };

  //Open form
  const formPage = () => {
    setOpenForm(true);
  };

  //Close form
  const closeForm = () => {
    setOpenForm(false);
  };

  return (
    <div>
      <div>
        <h2>I am the Parent component.</h2>
        <div className={styles.btnClick}>
          <button onClick={openStoppage}>Dialog-Popup</button>
          <button onClick={formPage}>Form Page</button>
        </div>
      </div>

      <Dialog
        open={openStoppageDialog}
        onClose={closeStoppage}
        maxWidth="lg"
        PaperProps={{
          style: {
            overflow: "visible",
            minWidth: "800px",
            minHeight: "680px",
            maxWidth: "800px",
          },
        }}
      >
        <div>
          <Stoppage closeDialog={closeStoppage} />
        </div>
      </Dialog>
      <Dialog
        open={openForm}
        onClose={closeForm}
        maxWidth="lg"
        PaperProps={{
          style: {
            overflow: "visible",
            minWidth: "800px",
            minHeight: "680px",
            maxWidth: "800px",
          },
        }}
      >
        <div>
          <FormPage closeDialog={closeForm} />
        </div>
      </Dialog>
    </div>
  );
}

export default Parents;
