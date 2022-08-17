import React from "react";

import classes from './SearchButton.module.css'

import searchImg from "../../assets/search_FILL0_wght400_GRAD0_opsz48.svg";

const SearchButton = () => {
  return (
    <div className={classes.searchContainer}>
      <button className={classes.searchButton}>
        <img className={classes.searchImg} src={searchImg} alt="search" />
        <p>Search</p>
      </button>
    </div>
  );
};

export default SearchButton;
