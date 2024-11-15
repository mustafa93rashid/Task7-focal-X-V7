import ServicesCard from "../ServicesCard/ServicesCard";
import "./Services.css";
import {
  HiOutlineArrowLongRight,
  HiOutlineArrowLongLeft,
} from "react-icons/hi2";

import icon1 from "/image/serviceIcon1_2.svg";
import icon2 from "/image/serviceIcon1_3.svg";
import icon3 from "/image/serviceIcon1_4.svg";
import icon4 from "/image/serviceIcon1_1.svg";

// Importing another component for displaying additional service requirements
import ServiceRequirement from "../ServiceRequirement/ServiceRequirement";
import { IoMdArrowRoundBack, IoMdArrowRoundForward } from "react-icons/io";

export default function Services() {
  return (
    <section className="MR-ServiceSection">
      {/* Title section */}
      <div>
        <p className="MR-ServiceTitle">
          <HiOutlineArrowLongLeft /> OUR SERVICES <HiOutlineArrowLongRight />
        </p>
        <div>
          <div className="MR-SectionSubtitle">
            <div>
              <h3 className="MR-SectionSubtitlePargraph">
                Elevating Businesses With IT Ingenuity
              </h3>
            </div>
            <div className="MR-SectionSubtitleButton">
              <button>
                <IoMdArrowRoundBack />
              </button>
              <button>
                <IoMdArrowRoundForward />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Service cards container */}
      <div className="MR-ServiceCardsContainer">
        {[
          {
            icon: icon1,
            title: "Woo Commerce",
            pargraph:
              "WooCommerce is an open-source plugin for the WordPress content management system, used to transform a website. ",
          },
          {
            icon: icon2,
            title: "CRM Solutions",
            pargraph:
              "Web Design is the process of creating visually appealing and user-friendly websites that provide a seamless experience for visitors.",
          },
          {
            icon: icon3,
            title: "Web Design",
            pargraph:
              "Web Design is the process of creating visually appealing and user-friendly websites that provide a seamless experience for visitors.",
          },
          {
            icon: icon4,
            title: "Data Guard Sentinel",
            pargraph:
              "Data Guard Sentinel likely refers to a system or service dedicated to safeguarding data through monitoring, backup, and security measures.",
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

      {/* Video section containing an embedded video */}
      <div className="MR-VideoContainer">
        <iframe
          src="https://www.youtube.com/embed/VCPGMjCW0is"
          title="Service Video"
        ></iframe>
      </div>

      {/* Requirements Container */}
      <div className="MR-ServiceRequirementsContainer">
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
