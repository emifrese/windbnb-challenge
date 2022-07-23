import React from "react";

import classes from "./Locations.module.css";

import first from "../../assets/01.jpg";

import starImg from "../../assets/star_FILL0_wght400_GRAD0_opsz48.svg";

const Locations = () => {
  return (
    <div className={classes.locationPageContainer}>
      <h2 className={classes.locationSearch}>Stays in Finland</h2>
      <p>+12 stays</p>
      <div className={classes.locationsContainer}>
        <div className={classes.location}>
          <div className={classes.locationImg}>
            <img src={first} />
          </div>
          <div className={classes.locationInfo}>
            <button>SUPER HOST</button>
            <p>Entire apartment, 2 beds</p>
            <figure>
              <img src={starImg} />
              <figcaption>4.40</figcaption>
            </figure>
          </div>
          <h3 className={classes.locationDescription}>
            Stylist apartment in center of the city
          </h3>
        </div>
        <div className={classes.location}>
          <div className={classes.locationImg}>
            <img src={first} />
          </div>
          <div className={classes.locationInfo}>
            <p>Private room</p>
            <figure>
              <img src={starImg} />
              <figcaption>4.25</figcaption>
            </figure>
          </div>
          <h3 className={classes.locationDescription}>
            Cozy, peaceful and private room with...
          </h3>
        </div>
        <div className={classes.location}>
          <div className={classes.locationImg}>
            <img src={first} />
          </div>
          <div className={classes.locationInfo}>
            <button>SUPER HOST</button>
            <p>Entire apartment, 2 beds</p>
            <figure>
              <img src={starImg} />
              <figcaption>4.40</figcaption>
            </figure>
          </div>
          <h3 className={classes.locationDescription}>
            Stylist apartment in center of the city
          </h3>
        </div>
        <div className={classes.location}>
          <div className={classes.locationImg}>
            <img src={first} />
          </div>
          <div className={classes.locationInfo}>
            <button>SUPER HOST</button>
            <p>Entire apartment, 2 beds</p>
            <figure>
              <img src={starImg} />
              <figcaption>4.40</figcaption>
            </figure>
          </div>
          <h3 className={classes.locationDescription}>
            Stylist apartment in center of the city
          </h3>
        </div>
        <div className={classes.location}>
          <div className={classes.locationImg}>
            <img src={first} />
          </div>
          <div className={classes.locationInfo}>
            <button>SUPER HOST</button>
            <p>Entire apartment, 2 beds</p>
            <figure>
              <img src={starImg} />
              <figcaption>4.40</figcaption>
            </figure>
          </div>
          <h3 className={classes.locationDescription}>
            Stylist apartment in center of the city
          </h3>
        </div>
        <div className={classes.location}>
          <div className={classes.locationImg}>
            <img src={first} />
          </div>
          <div className={classes.locationInfo}>
            <button>SUPER HOST</button>
            <p>Entire apartment, 2 beds</p>
            <figure>
              <img src={starImg} />
              <figcaption>4.40</figcaption>
            </figure>
          </div>
          <h3 className={classes.locationDescription}>
            Stylist apartment in center of the city
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Locations;
