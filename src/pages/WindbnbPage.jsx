import React from 'react'
import Header from '../components/Header/Header'
import Locations from '../components/Locations/Locations'
import WindbnbPageWrapper from '../components/UI/WindbnbPageWrapper'

const WindbnbPage = () => {
  return (
    <WindbnbPageWrapper>
      <Header/>
      <Locations />
    </WindbnbPageWrapper>
  )
}

export default WindbnbPage