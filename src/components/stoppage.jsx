import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import styles from "./stoppage.module.css";
import { IoMdArrowRoundBack } from "react-icons/io";
import { IoClose } from "react-icons/io5";

export function Stoppage(props) {
  const [stoppageCodes, setStoppageCodes] = useState(() => {
    const saved = localStorage.getItem("stoppages");
    return saved ? JSON.parse(saved) : [];
  });
  const [filteredStoppageCodes, setFilteredStoppageCodes] = useState([]);
  const [newValues, setNewValues] = useState("");
  const [parentId, setParentId] = useState("0");
  const { closeDialog } = props;

  useEffect(() => {
    if (!localStorage.getItem("stoppages")) {
      localStorage.setItem(
        "stoppages",
        JSON.stringify([
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
        ])
      );
    }
  }, []);

  useEffect(() => {
    const _filteredStoppageCodes = stoppageCodes.filter(
      (stoppage) => stoppage.parentid === parentId
    );
    setFilteredStoppageCodes(_filteredStoppageCodes);
  }, [stoppageCodes, parentId]);

  const onSubmit = () => {
    console.log("Submit clicked");
  };

  const onCancel = () => {
    console.log("Cancel clicked");
    closeDialog();
  };

  const onStoppageClick = (elem) => {
    setParentId(elem.id);
    const _filteredStoppageCodes = stoppageCodes.filter(
      (stoppage) => stoppage.parentid === elem.id
    );
    setFilteredStoppageCodes(_filteredStoppageCodes);
  };

  const handleBack = () => {
    const currentStoppage = stoppageCodes.find(
      (stoppage) => stoppage.id === parentId
    );
    setParentId(currentStoppage ? currentStoppage.parentid : "0");
  };

  const handleChange = (event) => {
    setNewValues(event.target.value);
  };

  const handleAddValues = (event) => {
    const storedItems = JSON.parse(localStorage.getItem("stoppages")) || [];
    if (newValues.trim() === "") {
      alert("Input cannot be empty. Please enter a value."); // Alert the user
      return; // Stop further execution if the input is empty
    }
    const temp = {
      id: "id" + (Math.floor(Math.random() * 90) + 10),
      name: newValues,
      parentid: parentId,
    };

    const newItems = [...storedItems, temp];
    localStorage.setItem("stoppages", JSON.stringify(newItems));
    setStoppageCodes(newItems);
    setNewValues("");
    event.target.value = ""
  };

  const handleClose = (e, id) => {
    e.stopPropagation();
    const updatedStoppages = stoppageCodes.filter((stoppage) => stoppage.id !== id);
    setStoppageCodes(updatedStoppages); 
    localStorage.setItem("stoppages", JSON.stringify(updatedStoppages));
  };
  
  return (
    <div className={styles.mainDiv}>
      <div className={styles.childDiv}>
        <div className={styles.heading}>
          {parentId !== "0" && (
            <IoMdArrowRoundBack
              className={styles.backButton}
              onClick={handleBack}
            />
          )}
          
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
                  <IoClose className={styles.closeButton}
                  onClick={(e) => handleClose(e, elem.id)}
                  />
                </button>
              );
            })}
        </div>

        <div className={styles.inputBox}>
          <input
            onChange={handleChange}
            type="text"
            placeholder="Enter The Value..."
            value={newValues}
            className={styles.inputField}
          />
          <button onClick={handleAddValues} className={styles.addButton}>
            Add
          </button>
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
