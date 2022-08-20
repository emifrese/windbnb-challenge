import React, { useContext } from "react";

import classes from "./LocationList.module.css";
import LocationListItem from "./LocationListItem";

import { places } from "../../helpers/variables";
import SearchContext from "../../store/search-context";

const LocationList = () => {
  const searchCtx = useContext(SearchContext);

  let location;
  let country;
  if (searchCtx.place.length >= 3) {
    for (let place of places) {
      console.log(searchCtx.place.length)
      if (searchCtx.place.toLocaleLowerCase() === place.country.substr(0, searchCtx.place.length).toLocaleLowerCase()) {
        location = place.cities;
        country = place.country;
      }
    }
  }

  let contentList = [];
  console.log(location)

  if(location){
    for (let city of location) {
      contentList.push(<LocationListItem city={city} country={country} />);
    }
  }

  return <ul className={classes.locationList}>{contentList}</ul>;
};

export default LocationList;
