import React, { useState } from "react";

import classes from "./FilterModal.module.css";

import closeImg from "../../assets/close_FILL0_wght400_GRAD0_opsz48.svg";
import SearchButton from "../UI/SearchButton";


const FilterModal = ({focusInput, setFocusInput, isMobile}) => {


  const content = isMobile ? (
    <>
      <figure className={classes.headerModal}>
        <figcaption>Edit your search</figcaption>
        <img src={closeImg} alt="cross" />
      </figure>
      <div className={classes.filterContainer}>
        <div
          className={classes.locationContainer}
          style={
            focusInput === "Location"
              ? {
                  borderWidth: "1px",
                  borderColor: "#333333",
                  borderStyle: "solid",
                  borderRadius: "16px",
                }
              : {}
          }
          onClick={() => setFocusInput("Location")}
        >
          <h3>LOCATION</h3>
          <input
            className={classes.locationInput}
            value={"Helsinki, Finland"}
          />
        </div>
        <div
          className={classes.guestContainer}
          style={
            focusInput === "Guest"
              ? {
                  borderWidth: "1px",
                  borderColor: "#333333",
                  borderStyle: "solid",
                  borderRadius: "16px",
                }
              : {}
          }
          onClick={() => setFocusInput("Guest")}
        >
          <h3>GUEST</h3>
          <input className={classes.guestInput} placeholder={"Add guests"} />
        </div>
      </div>
    </>
  ) : (
    <div className={classes.filterContainer}>
      <div
        className={classes.locationContainer}
        style={
          focusInput === "Location"
            ? {
                borderWidth: "1px",
                borderColor: "#333333",
                borderStyle: "solid",
                borderRadius: "16px",
              }
            : {}
        }
        onClick={() => setFocusInput("Location")}
      >
        <h3>LOCATION</h3>
        <input className={classes.locationInput} value={"Helsinki, Finland"} />
      </div>
      <div
        className={classes.guestContainer}
        style={
          focusInput === "Guest"
            ? {
                borderWidth: "1px",
                borderColor: "#333333",
                borderStyle: "solid",
                borderRadius: "16px",
              }
            : {}
        }
        onClick={() => setFocusInput("Guest")}
      >
        <h3>GUEST</h3>
        <input className={classes.guestInput} placeholder={"Add guests"} />
      </div>
      <SearchButton />
    </div>
  );

  return content;
};

export default FilterModal;
