import React from "react";

import classes from "./Filter.module.css";

import searchImg from "../../assets/search_FILL0_wght400_GRAD0_opsz48.svg";

const Filter = ({toggle}) => {
  return (
    <div className={classes.filterContainer} onClick={() => toggle()}>
      <button className={classes.locationButton}>Helsinki, Finland</button>
      <button className={classes.guestButton}>Add guests</button>
      <div className={classes.imgContainer}>
        <img className={classes.searchImg} src={searchImg} alt="search" />
      </div>
    </div>
  );
};

export default Filter;
