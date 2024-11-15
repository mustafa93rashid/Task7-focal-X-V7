import React from "react";
import Footer from "../../Components/Footer/Footer";
import GetInTouch from "../../Components/GetInTouch/GetInTouch";
import Hero from "../../Components/Hero/Hero";
import Navbar from "../../Components/Navbar/Homenavbar";

export default function Contact() {
  return (
    <>
      <Navbar n={false} />
      <Hero v={false} title={"Contact Us"} Section={"Contact Us"} />
      <GetInTouch />
      <Footer z={false} />
    </>
  );
}
