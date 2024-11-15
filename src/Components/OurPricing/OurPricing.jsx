import {
  HiOutlineArrowLongLeft,
  HiOutlineArrowLongRight,
} from "react-icons/hi2";
import "./OurPricing.css";
import OurPricingCard from "../OurPricingCard/OurPricingCard";

export default function OurPricing() {
  return (
    <section className="OP-section">
      {/* Section Title with Left and Right Arrow Icons */}
      <p className="OP-title">
        <HiOutlineArrowLongLeft /> OUR PRICING <HiOutlineArrowLongRight />
      </p>
      
      {/* Subtitle for Pricing Section */}
      <h3 className="OP-description">Our Awesome Pricing Plans</h3>

      {/* Toggle Buttons for Monthly and Yearly Plans and Save Icon */}
      <div className="OP-toggle-container">
        <div className="OP-toggle-buttons">
          <button>Monthly</button>
          <button>Yearly</button>
        </div>
        <img src="/image/pricingIcon1_2.svg" alt="Save Icon" />
        <span>Save 25%</span>
      </div>

      {/* Decorative Shape Image */}
      <div>
        <img className="OP-shape-right" src="/image/pricingShape1_2.webp" alt="Right Shape" />
      </div>

      {/* Pricing Cards */} 
      <div className="OP-card-container">
        <OurPricingCard />
        <OurPricingCard />
        <OurPricingCard />
      </div>
      {/* I did not make a map to add information because the information in all cards is similar */}

      {/* Decorative Shape Image */}
      <div>
        <img className="OP-shape-left" src="/image/pricingShape1_1.webp" alt="Left Shape" />
      </div>
    </section>
  );
}
