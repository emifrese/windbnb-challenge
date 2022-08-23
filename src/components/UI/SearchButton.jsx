import React from "react";

import classes from './SearchButton.module.css'

import searchImg from "../../assets/search_FILL0_wght400_GRAD0_opsz48.svg";
import { useContext } from "react";
import SearchContext from "../../store/search-context";

const SearchButton = ({toggle}) => {

  const searchCtx = useContext(SearchContext);

  
  const filterLocationsHandler = () => {
    const [city, country] = searchCtx.place.split(", ")
    
    if(city && country){
      searchCtx.filterLocations(city, country)
      toggle()
    }
  }

  return (
    <div className={classes.searchContainer}>
      <button className={classes.searchButton} onClick={() => filterLocationsHandler()}>
        <img className={classes.searchImg} src={searchImg} alt="search" />
        <p>Search</p>
      </button>
    </div>
  );
};

export default SearchButton;
