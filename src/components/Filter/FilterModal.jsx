import React from "react";

import classes from "./FilterModal.module.css";

import searchImg from "../../assets/search_FILL0_wght400_GRAD0_opsz48.svg";

const FilterModal = () => {
  return (
    <div className={classes.filterContainer} onClick={() => toggle()}>
      <div className={classes.locationContainer}>
        <h3>LOCATION</h3>
        <input className={classes.locationInput} value={"Helsinki, Finland"} />
      </div>
      <div className={classes.guestContainer}>
        <h3>GUEST</h3>
        <input className={classes.guestInput} placeHolder={"Add guests"} />
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
