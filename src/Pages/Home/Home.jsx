import "./Home.css";
import Hero from "../../Components/Hero/Hero";
import Brand from "../../Components/Brand/Brand";
import Services from "../../Components/Services/Services";
import OurPricing from "../../Components/OurPricing/OurPricing";
import Contactus from "../../Components/Contactus/Contactus";
import Blog from "../../Components/Blog/Blog";
import Footer from "../../Components/Footer/Footer";
import Testimonils from "../../Components/Testimonils/Testimonils";
import Navbar from "../../Components/Navbar/Homenavbar";

export default function Home() {
  return (
    <>
      <Navbar n={true} />
      <Hero v={true} />
      <Brand />
      <Services />
      <OurPricing />
      <Contactus />
      <Testimonils />
      <Blog />
      <Footer z={true}/>
    </>
  );
}
