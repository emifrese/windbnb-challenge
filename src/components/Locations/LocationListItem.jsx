import React, {useContext} from "react";

import classes from "./LocationListItem.module.css";

import locationImg from "../../assets/location_on_FILL0_wght400_GRAD0_opsz48.svg";
import SearchContext from "../../store/search-context";

const LocationListItem = ({city, country}) => {

  const searchCtx = useContext(SearchContext);

  return (
    <li className={classes.locationListItem}>
      <figure className={classes.imgContainer} onClick={() => searchCtx.editPlace(`${city}, ${country}`)}>
        <img src={locationImg} alt='location-pin'/>
        <figcaption>{city}, {country}</figcaption>
      </figure>
    </li>
  );
};

export default LocationListItem;
