import React from 'react'

import classes from './LocationItem.module.css'

import starImg from '../../assets/star_FILL0_wght400_GRAD0_opsz48.svg'

const LocationItem = ({img, superHost, stars, info, description}) => {

  return (
    <div className={classes.location}>
          <div className={classes.locationImg}>
            <img src={img} />
          </div>
          <div className={classes.locationInfo}>
            {superHost && <button>SUPER HOST</button>}
            <p>{info}</p>
            <figure>
              <img src={starImg} />
              <figcaption>{stars}</figcaption>
            </figure>
          </div>
          <h3 className={classes.locationDescription}>
            {description}
          </h3>
        </div>
  )
}

export default LocationItem