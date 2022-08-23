import React from 'react'

import classes from './Header.module.css'

import logo from '../../assets/logo.png'
import Filter from '../Filter/Filter'
import ResetButton from '../UI/ResetButton'

const Header = ({toggle}) => {
  return (
    <div className={classes.container}>
        <figure className={classes.logo}>
            <img  src={logo} alt='logo'/>
        </figure>
        <Filter toggle={toggle}/>
        <ResetButton />
    </div>
  )
}

export default Header