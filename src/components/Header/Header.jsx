import React from 'react'

import classes from './Header.module.css'

import logo from '../../assets/logo.png'
import Filter from '../Filter/Filter'

const Header = ({toggle}) => {
  return (
    <div className={classes.container}>
        <figure>
            <img  src={logo} alt='logo'/>
        </figure>
        <Filter toggle={toggle}/>
    </div>
  )
}

export default Header