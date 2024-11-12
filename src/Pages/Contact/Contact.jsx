import React from "react";
import NavBar2 from "../../Components/NavBar2/NavBar2";
import Hero2 from "../../Components/Hero2/Hero2";
import Footer from "../../Components/Footer/Footer";
import GetInTouch from "../../Components/GetInTouch/GetInTouch";

export default function Contact() {
  return (
    <>
      <NavBar2 />
      <Hero2 title={"Contact Us"} Section={"Contact Us"} />
      <GetInTouch />
      <Footer />
    </>
  );
}
