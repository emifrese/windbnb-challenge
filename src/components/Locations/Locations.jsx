import React, { useContext } from "react";

import classes from "./Locations.module.css";

import LocationItem from "./LocationItem";
import SearchContext from "../../store/search-context";

const Locations = () => {

  const searchCtx = useContext(SearchContext)
  console.log(searchCtx.stays)

  const locationsDisplay = searchCtx.showedLocations;

  const locationRender = [];

  for (let location of locationsDisplay) {
    locationRender.push(
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
        <p>{searchCtx.stays} stay{searchCtx.stays > 1 && "s"}</p>
      </div>
      <div className={classes.locationsContainer}>{locationRender}</div>
    </div>
  );
};

export default Locations;
