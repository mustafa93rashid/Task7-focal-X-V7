import ServicesCard from "../ServicesCard/ServicesCard";
import "./Services.css";
import { HiOutlineArrowLongRight, HiOutlineArrowLongLeft } from "react-icons/hi2";

import icon1 from "./../../../public/image/serviceIcon1_2.svg";
import icon2 from "./../../../public/image/serviceIcon1_3.svg";
import icon3 from "./../../../public/image/serviceIcon1_4.svg";
import icon4 from "./../../../public/image/serviceIcon1_1.svg";

import ServiceRequirement from "../ServiceRequirement/ServiceRequirement";

export default function Services() {
  return (
    <section className="MR-ServiceSection">
      <p className="destitle">
        <HiOutlineArrowLongLeft /> OUR SERVICES <HiOutlineArrowLongRight />
      </p>
      <h3>Elevating Businesses With IT Ingenuity</h3>
      
      <div className="all-card">
        {[
          {
            icon: icon1,
            title: "Woo Commerce",
            pargraph:
              "WooCommerce is an open-source plugin for the WordPress content management system, used to transform a website into a fully functional online store. It’s one of the most popular solutions for creating eCommerce websites.",
          },
          {
            icon: icon2,
            title: "CRM Solutions",
            pargraph:
              "Web Design is the process of creating visually appealing and user-friendly websites that provide a seamless experience for visitors. It combines elements of layout, graphics, colors, fonts, and interactive features to engage users, promote content.",
          },
          {
            icon: icon3,
            title: "Web Design",
            pargraph:
              "Web Design is the process of creating visually appealing and user-friendly websites that provide a seamless experience for visitors. It combines elements of layout, graphics, colors, fonts, and interactive features to engage users, promote content.",
          },
          {
            icon: icon4,
            title: "Data Guard Sentinel",
            pargraph:
              "Data Guard Sentinel likely refers to a system or service dedicated to safeguarding data through monitoring, backup, and security measures. While not a specific product universally recognized across industries,",
          },
        ].map((data, index) => (
          <ServicesCard
            key={index}
            icon={data.icon}
            title={data.title}
            pargraph={data.pargraph}
          />
        ))}
      </div>

      <div className="video-container">
      <iframe
src="https://www.youtube.com/embed/VCPGMjCW0is">
</iframe>
      </div>

      <div className="all-servicerq">
        {[
          {
            number: "01",
            mtitle: "Requirement",
            mpargraph:
              "WooCommerce is an open-source plugin for the WordPress content management system.",
          },
          {
            number: "02",
            mtitle: "UI/UX Design",
            mpargraph:
              "WooCommerce is an open-source plugin for the WordPress content management system.",
          },
          {
            number: "03",
            mtitle: "Prototype",
            mpargraph:
              "WooCommerce is an open-source plugin for the WordPress content management system.",
          },
          {
            number: "04",
            mtitle: "Development",
            mpargraph:
              "WooCommerce is an open-source plugin for the WordPress content management system.",
          },
        ].map((data, index) => (
          <ServiceRequirement
            key={index}
            number={data.number}
            mtitle={data.mtitle}
            mpargraph={data.mpargraph}
          />
        ))}
      </div>
    </section>
  );
}
