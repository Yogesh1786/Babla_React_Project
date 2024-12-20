import React, { useState } from "react";
import styles from "./formPage.module.css";
import { Button } from "@mui/material";

function FormPage({ closeDialog }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    message: "",
  });

  const [jsonData, setJsonData] = useState(null)//State to hold JSON data

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // You can also add logic to send this data to an API
    // alert(`Form submitted with Name: ${formData.name}`);
    // setFormData({ name: "", email: "", message: "",date: ""}); // Reset form
    setJsonData(formData)
    // setFormData({
    //   name: "",
    //   email: "",
    //   message: "",
    //   date: "",
    // });
  };

  const onCancel = () => {
    closeDialog();
  };

  return (
    <div className={styles.parentPage}>
      <h1 className={styles.heading}>Form Page</h1>

      <div>
        <form className={styles.form} onSubmit={handleFormSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email">Date</label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter your message"
              rows="4"
              required
            ></textarea>
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
        </form>

        {jsonData && (
          <div className={styles.jsonDisplay}>
            <h2>Submitted Data in (JSON):</h2>
            <pre>{JSON.stringify(jsonData, null, 2)}</pre>
          </div>
        )}
      </div>
    </div>
  );
}

export default FormPage;
