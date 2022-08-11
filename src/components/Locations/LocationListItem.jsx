import React from "react";

import classes from "./LocationListItem.module.css";

import locationImg from "../../assets/location_on_FILL0_wght400_GRAD0_opsz48.svg";

const LocationListItem = () => {
  return (
    <li className={classes.locationListItem}>
      <figure className={classes.imgContainer}>
        <img src={locationImg} alt='location-pin'/>
        <figcaption>LocationListItem</figcaption>
      </figure>
    </li>
  );
};

export default LocationListItem;
