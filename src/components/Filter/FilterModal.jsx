import React, { useState } from "react";

import classes from "./FilterModal.module.css";

import searchImg from "../../assets/search_FILL0_wght400_GRAD0_opsz48.svg";

const FilterModal = () => {
  const [focusInput, setFocusInput] = useState("Location");

  return (
    <div className={classes.filterContainer}>
      <div
        className={classes.locationContainer}
        style={
          focusInput === "Location" ? {
            borderWidth: "1px",
            borderColor: "#333333",
            borderStyle: "solid",
            borderRadius: "16px",
          } : {}
        }
        onClick={() =>
          setFocusInput("Location")
        }
      >
        <h3>LOCATION</h3>
        <input className={classes.locationInput} value={"Helsinki, Finland"} />
      </div>
      <div
        className={classes.guestContainer}
        style={
          focusInput === "Guest" ? {
            borderWidth: "1px",
            borderColor: "#333333",
            borderStyle: "solid",
            borderRadius: "16px",
          } : {}
        }
        onClick={() =>
          setFocusInput("Guest")
        }
      >
        <h3>GUEST</h3>
        <input className={classes.guestInput} placeholder={"Add guests"} />
      </div>
      <div className={classes.searchContainer}>
        <button className={classes.searchButton}>
          <img className={classes.searchImg} src={searchImg} alt="search" />
          <p>Search</p>
        </button>
      </div>
    </div>
  );
};

export default FilterModal;
