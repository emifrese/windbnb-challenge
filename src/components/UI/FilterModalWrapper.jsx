import React from 'react'

import classes from './FilterModalWrapper.module.css'

const FilterModalWrapper = ({children}) => {
  return (
    <div className={classes.container}>{children}</div>
  )
}

export default FilterModalWrapper