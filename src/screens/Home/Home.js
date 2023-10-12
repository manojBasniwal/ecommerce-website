import React from 'react'
import PageWidthNavbar from '../../components/PageWidthNavbar'
import HeroSection from '../../components/HeroSection'
import Services from '../../components/Services'
import Trusted from '../../components/Trusted'

function Home() {
  const data = {
    name: "Manoj Store"
  }
  return (
    <PageWidthNavbar>
      <HeroSection myData={data} />
      <Services />
      <Trusted />
    </PageWidthNavbar>
  )
}

export default Home
