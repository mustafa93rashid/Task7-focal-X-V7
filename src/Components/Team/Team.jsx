import { HiOutlineArrowLongLeft, HiOutlineArrowLongRight } from "react-icons/hi2";
import "./Team.css";
import Teamcard from "../Teamcard/Teamcard";
import img1 from "/image/04.webp"
import img2 from "/image/05.webp"


import img3 from "/image/06.webp"
import img4 from "/image/07.webp"

export default function Team() {
  return (
    <section>
    <div className="team-section">
      <p className="team-title">
        <HiOutlineArrowLongLeft />TEAM MEMBERS<HiOutlineArrowLongRight />
      </p>
      <h3 className="team-description">Our Dedicated Members</h3>
    </div>

    <div className="Teamcard">
    {[{img: img1, name:'masirul Islam' , title:'Web Designer'}, 
        {img: img2, name:'Jessica Mardol' , title:'Cyber Expert'}, 
        {img: img3, name:'Arnold Hemingway' , title:'Web Expert'}, 
        {img: img4, name:'Shikon Haque' , title:'Data Analyst'}, 
      
      ]
        .map((data, index) => (
          <Teamcard 
            key={index}
            img={data.img}
            name={data.name}
           title={data.title}
          />
        ))}
    </div>
    <div >
        <div className="Brandtrust">
        <div className="Brandline"></div>
        <p>1k+ Brands Trust Us</p>
        <div className="Brandline"></div>
        </div>
        <div className="envato">
            <img src="/image/envato.svg" alt="" />
            <img src="/image/envato.svg" alt="" />
            <img src="/image/envato.svg" alt="" />
            <img src="/image/envato.svg" alt="" />
            <img src="/image/envato.svg" alt="" />
        </div>

    </div>
    </section>
  );
}
