import React from 'react';
import PageWidthNavbar from '../../components/PageWidthNavbar'
import HeroSection from '../../components/HeroSection';

function About() {
  const data = {
    name: "Manoj Ecommerce"
  }
  return (
    <PageWidthNavbar>
      <HeroSection myData={data}/>
    </PageWidthNavbar>
  )
}

export default About
