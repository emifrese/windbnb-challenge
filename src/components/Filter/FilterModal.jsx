import React, { useContext, useState } from "react";

import classes from "./FilterModal.module.css";

import closeImg from "../../assets/close_FILL0_wght400_GRAD0_opsz48.svg";
import SearchButton from "../UI/SearchButton";
import SearchContext from "../../store/search-context";

const FilterModal = ({ focusInput, setFocusInput, isMobile, toggle }) => {
  const searchCtx = useContext(SearchContext);

  
  const guestValue =
    searchCtx.guests.adults > 0 || searchCtx.guests.children > 0
      ? `${searchCtx.guests.adults} Adults, ${searchCtx.guests.children} Children`
      : "";

  const content = isMobile ? (
    <>
      <figure className={classes.headerModal}>
        <figcaption>Edit your search</figcaption>
        <img src={closeImg} alt="cross" onClick={() => toggle()} />
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
            value={searchCtx.place}
            onChange={(e) => searchCtx.editPlace(e.target.value)}
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
        <input
          className={classes.locationInput}
          value={searchCtx.place}
          onChange={(e) => searchCtx.editPlace(e.target.value)}
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
        <input
          className={classes.guestInput}
          value={guestValue}
          placeholder={"Add guests"}
        />
      </div>
      <SearchButton />
    </div>
  );

  return content;
};

export default FilterModal;
