import React, { useContext } from "react";

import classes from "./Locations.module.css";

import { locations } from "../../helpers/variables";

import LocationItem from "./LocationItem";
import SearchContext from "../../store/search-context";

const Locations = () => {

  const searchCtx = useContext(SearchContext)

  const locationsDisplay = searchCtx.showedLocations;

  for (let location of locations) {
    locationsDisplay.push(
      <LocationItem
        key={location.id}
        img={location.img}
        superHost={location.superHost}
        stars={location.stars}
        info={location.info}
        description={location.description}
      />
    );
  }

  return (
    <div className={classes.locationPageContainer}>
      <div className={classes.locationHeaderContainer}>
        <h2 className={classes.locationSearch}>Stays in Finland</h2>
        <p>+12 stays</p>
      </div>
      <div className={classes.locationsContainer}>{locationsDisplay}</div>
    </div>
  );
};

export default Locations;
