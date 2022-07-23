import React from 'react'

import classes from './WindbnbPageWrapper.module.css'

const WindbnbPageWrapper = ({children}) => {
  return (
    <div className={classes.container}>{children}</div>
  )
}

export default WindbnbPageWrapper