import React from 'react'

import classes from './Header.module.css'

import logo from '../../assets/logo.png'
import Filter from '../Filter/Filter'

const Header = () => {
  return (
    <div className={classes.container}>
        <figure>
            <img  src={logo} alt='logo'/>
        </figure>
        <Filter />
    </div>
  )
}

export default Header