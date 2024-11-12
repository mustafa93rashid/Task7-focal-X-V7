import NavBar2 from "../../Components/NavBar2/NavBar2";
import Footer from "../../Components/Footer/Footer";

import "./About.css";
import Hero2 from "../../Components/Hero2/Hero2";
import Team from "../../Components/Team/Team";
import Department from "../../Components/Department/Department";



export default function About() {
  return (
    <>
      <NavBar2 />
      <Hero2 
      title={"About"}
      Section={"About"}/>
      <Department />
      <Team />
      <Footer />
    </>
  );
}
