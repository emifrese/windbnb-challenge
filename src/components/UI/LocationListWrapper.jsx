import React from 'react'

import classes from './LocationListWrapper.module.css'

const LocationListWrapper = ({children}) => {
  return (
    <div className={classes.listContainer}>{children}</div>
  )
}

export default LocationListWrapper