import {
  HiOutlineArrowLongLeft,
  HiOutlineArrowLongRight,
} from "react-icons/hi2";
import "./Testimonils.css";
import testimg1 from "/image/testiThumb3_1.webp";
import testimg2 from "/image/testiThumb3_2.webp";
import testimg3 from "/image/testiThumb3_3.webp";
import TestimonilsCard from "../TestimonilsCard/TestimonilsCard";

export default function Testimonils() {
  return (
    <>
      <section className="MR-testandcontact-section">
        {/* Contact Section */}
        <div className="MR-parent">
          <div className="MR-contact-section">
            <div>
              <img
                className="MR-contact-image"
                src="/image/ctaThumb1_1.webp"
                alt="Contact Image"
              />
            </div>
            <div>
              <img
                className="MR-contact-shape"
                src="/image/ctaShape1_1.webp"
                alt="Contact Shape"
              />
            </div>

            <div className="MR-contact-details">
              <h3>
                <HiOutlineArrowLongLeft />
                <span> CONTACT US </span>
                <HiOutlineArrowLongRight />
              </h3>
              <p>24/7 Expert Hosting Support Our Customers Love</p>
            </div>

            <div>
              <button>
                {" "}
                TALK TO A SPECIALIST <HiOutlineArrowLongRight />
              </button>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="MR-testimonials-section">
          <div className="MR-testimonials-details">
            <p className="MR-testimonials-title">
              <HiOutlineArrowLongLeft /> TESTIMONIALS{" "}
              <HiOutlineArrowLongRight />
            </p>
            <h3 className="MR-testimonials-description">
              Our Latest Client Feedback
            </h3>
          </div>

          {/* Testimonials Cards */}
          <div className="row MR-all-cards">
            {[
              {
                img: testimg1,
                paragraph:
                  ' "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat dolorem quia neque accusamus ad."',
                name: "Kristin Watson",
                position: "Web Designer",
              },
              {
                img: testimg2,
                paragraph:
                  ' "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat dolorem quia neque accusamus ad."',
                name: "Theresa Webb",
                position: "Tech Enthusiast",
              },
              {
                img: testimg3,
                paragraph:
                  ' "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat dolorem quia neque accusamus ad."',
                name: "Round Richards",
                position: "Web Entrepreneur",
              },
            ].map((data, index) => (
              <TestimonilsCard
                key={index}
                img={data.img}
                paragraph={data.paragraph}
                name={data.name}
                position={data.position}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
