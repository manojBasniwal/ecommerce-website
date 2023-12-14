import React from 'react'
import PageWidthNavbar from '../../components/PageWidthNavbar'
import HeroSection from '../../components/HeroSection'
import Services from '../../components/Services'
import Trusted from '../../components/Trusted'
import FeatureProduct from '../../components/FeatureProduct'

function Home() {
  const data = {
    name: "Manoj Store"
  }
  return (
    <PageWidthNavbar>
      <HeroSection myData={data} />
      <FeatureProduct/>
      <Services />
      <Trusted />
    </PageWidthNavbar>
  )
}

export default Home
