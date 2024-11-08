import { HiOutlineArrowLongLeft, HiOutlineArrowLongRight } from 'react-icons/hi2';
import './OurPricing.css';
import OurPricingCard from '../OurPricingCard/OurPricingCard';

export default function OurPricing() {
  return (
    <section className='pricing-section'>
      <p className='pricing-title'>
        <HiOutlineArrowLongLeft /> OUR PRICING <HiOutlineArrowLongRight />
      </p>
      <h3 className='pricing-description'>Our Awesome Pricing Plans</h3>

      <div className='pricing-card-container'>
        <OurPricingCard />
        <OurPricingCard />
        <OurPricingCard />
      </div>
    </section>
  );
}
