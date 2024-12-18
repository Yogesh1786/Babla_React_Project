import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import styles from "./stoppage.module.css";
export function Stoppage(props) {
  const [stoppageCodes, setStoppageCodes] = useState([]);
  const [filteredStoppageCodes, setFilteredStoppageCodes] = useState([]);
  const [parentId, setParentId] = useState("0"); // Current parent ID for filtering stoppages
  const { closeDialog } = props;

  useEffect(() => {
    console.log("I am inside Initial Use Effect");

    // Static stoppage data (you can replace this with an API call)
    const stoppages = [
      { id: "id1", parentid: "0", name: "Assembly" },
      { id: "id11", parentid: "id1", name: "Servo A" }, 
      { id: "id111", parentid: "id11", name: "Fault" },
      { id: "id2", parentid: "0", name: "Hookup" },
      { id: "id3", parentid: "0", name: "Pre-Stress" },
      { id: "id4", parentid: "0", name: "Measuring Machine" },
      { id: "id5", parentid: "0", name: "Stacker" },
      { id: "id51", parentid: "id5", name: "ISL Stacker" },
      { id: "id511", parentid: "id51", name: "Burrs on links" },
      { id: "id52", parentid: "id5", name: "OSG Stacker" },
      { id: "id6", parentid: "0", name: "Other" },
      { id: "id7", parentid: "0", name: "Component Quality" },
      { id: "id71", parentid: "id7", name: "ISL" },
      { id: "id72", parentid: "id7", name: "OSG" },
      { id: "id73", parentid: "id7", name: "Pins" },
      { id: "id711", parentid: "id71", name: "Burrs" },
    ];

    setStoppageCodes(stoppages);

    var _filteredStoppageCodes = stoppages.filter(
      (stoppage) => stoppage.parentid === parentId
    );

    setFilteredStoppageCodes(_filteredStoppageCodes);
  }, []);

  const onSubmit = () => {
    console.log("Submit clicked");
    // You can handle form submission or other logic here
    // closeDialog(); // Close the dialog after submitting
  };

  const onCancel = () => {
    console.log("Cancel clicked");
    closeDialog(); // Close the dialog on cancel
  };

  const onStoppageClick = (elem) => {
    console.log("On Stoppage clicked");
    console.log(elem);
    setParentId(elem.id);
    var _filteredStoppageCodes = stoppageCodes.filter(
      (stoppage) => stoppage.parentid === elem.id
    );

    setFilteredStoppageCodes(_filteredStoppageCodes);
  };

  return (
    <div className={styles.mainDiv}>
      <div className={styles.childDiv}>
        <div className={styles.heading}>
          <h2>Stoppage / Down Reason</h2>
        </div>

        <div className={styles.filteredElements}>
          {filteredStoppageCodes &&
            filteredStoppageCodes.map((elem) => {
              return (
                <button
                  onClick={() => onStoppageClick(elem)}
                  className={styles.buttonGrp}
                  key={elem.id}
                >
                  {elem.name}
                </button>
              );
            })}
        </div>

        <div>
            <input type="text" />
            <button>Add</button>
        </div>

        <div className={styles.footerBtns}>
          <Button
            size="large"
            sx={{
              backgroundColor: "#4a70c4",
              color: "white",
              textTransform: "none",
              padding: "10px 30px",
              borderRadius: "5px",
              fontWeight: "500",
              transition: "background-color 0.3s ease, transform 0.2s ease",
              "&:hover": {
                backgroundColor: "#365a9c",
                transform: "translateY(-2px)",
              },
            }}
            onClick={onSubmit}
          >
            Submit
          </Button>

          <Button
            size="large"
            sx={{
              backgroundColor: "#d9534f",
              color: "white",
              textTransform: "none",
              padding: "10px 30px",
              borderRadius: "5px",
              fontWeight: "500",
              transition: "background-color 0.3s ease, transform 0.2s ease",
              "&:hover": {
                backgroundColor: "#c9302c",
                transform: "translateY(-2px)",
              },
            }}
            onClick={onCancel}
          >
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Stoppage;
