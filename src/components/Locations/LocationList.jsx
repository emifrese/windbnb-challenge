import React from 'react'

import classes from './LocationList.module.css'
import LocationListItem from './LocationListItem';

const LocationList = () => {

    let contentList = [];

    for(let i=0; i < 2; i++){
        contentList.push(<LocationListItem />)
    }

  return (
    <ul>{contentList}</ul>
  )
}

export default LocationList