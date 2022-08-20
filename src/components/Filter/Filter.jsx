import React from "react";

import classes from "./Filter.module.css";

import searchImg from "../../assets/search_FILL0_wght400_GRAD0_opsz48.svg";
import SearchContext from "../../store/search-context";
import { useContext } from "react";

const Filter = ({toggle}) => {

  const searchCtx = useContext(SearchContext)

  return (
    <div className={classes.filterContainer} onClick={() => toggle()}>
      <button className={classes.locationButton}>{searchCtx.place || "Location"}</button>
      <button className={classes.guestButton}>Add guests</button>
      <div className={classes.imgContainer}>
        <img className={classes.searchImg} src={searchImg} alt="search" />
      </div>
    </div>
  );
};

export default Filter;
