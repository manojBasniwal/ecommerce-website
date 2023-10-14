import PageWidthNavbar from '../../components/PageWidthNavbar'
import HeroSection from '../../components/HeroSection';
import { useProductContext } from '../../context/productcontext';

function About() {
  const {myName} = useProductContext();
  const data = {
    name: "Manoj Ecommerce"
  }
  return (
    <PageWidthNavbar>
      <HeroSection myData={data}/>
      {myName}
    </PageWidthNavbar>
  )
}

export default About
