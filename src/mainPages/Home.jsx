import React from 'react'
import LandingPage from '../pages/LandingPage'
import Countries from '../pages/Countries'
import Area from '../pages/Area'
import FeaturesList from '../pages/featuresList/FeaturesList'
import Footer from '../pages/footer/Footer'


const Home = () => {
  return (
    <div>
        <LandingPage/>
        <Countries/>
        <Area/>
        <FeaturesList/>
        <Footer/>
    </div>
  )
}

export default Home