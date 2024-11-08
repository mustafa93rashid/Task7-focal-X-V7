import './App.css'
import Hero from './Components/Hero/Hero'
import Services from './Components/Services/Services'
import Brand from './Components/Brand/Brand'
import Homenavbar from './Components/Navbar/Homenavbar'
import OurPricing from './Components/OurPricing/OurPricing'
import Contactus from './Components/Contactus/Contactus'
import Blog from './Components/Blog/Blog'
import Footer from './Components/Footer/Footer'




function App() {

  return (
    <>
    <Homenavbar />
    <Hero />
    <Brand />
    <Services />
    <OurPricing />
    {/* <Contactus /> */}
    <Blog />
    <Footer />

    </>
  )
}

export default App
