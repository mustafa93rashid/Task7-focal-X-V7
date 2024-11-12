import "./Home.css";
import Homenavbar from "../../Components/Navbar/Homenavbar";
import Hero from "../../Components/Hero/Hero";
import Brand from "../../Components/Brand/Brand";
import Services from "../../Components/Services/Services";
import OurPricing from "../../Components/OurPricing/OurPricing";
import Contactus from "../../Components/Contactus/Contactus";
import Blog from "../../Components/Blog/Blog";
import Footer from "../../Components/Footer/Footer";
import Testimonils from "../../Components/Testimonils/Testimonils";

export default function Home() {
  return (
    <>
      <Homenavbar />
      <Hero />
      <Brand />
      <Services />
      <OurPricing />
      <Testimonils />
      {/* <Contactus /> */}
      <Blog />
      <Footer />
    </>
  );
}
