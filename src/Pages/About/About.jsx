import Footer from "../../Components/Footer/Footer";

import "./About.css";
import Team from "../../Components/Team/Team";
import Department from "../../Components/Department/Department";
import Hero from "../../Components/Hero/Hero";
import Navbar from "../../Components/Navbar/Homenavbar";



export default function About() {
  return (
    <>
      <Navbar n={false}/>
      <Hero v={false}
      title={"About"}
      Section={"About"} />
      <Department />
      <Team />
      <Footer z={false} />
    </>
  );
}
