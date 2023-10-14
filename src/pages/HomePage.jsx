import React from 'react'
import Header from '../components/Header/index'
import Home from '../components/Home/index'
import Ourteam from '../components/Ourteam/index'
import Specialties from '../components/Specialties/index'
import Ourspace from '../components/Ourspace/index'
const HomePage = () => {
  return (
    <>
      <Header />
      <Home />
      <Ourteam />
      <Specialties/>
      <Ourspace/>
    </>
  )
}

export default HomePage