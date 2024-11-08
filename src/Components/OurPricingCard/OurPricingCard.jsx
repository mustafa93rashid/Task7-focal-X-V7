import { GiCheckMark } from 'react-icons/gi';
import { IoIosClose } from "react-icons/io";
import { RxQuestionMarkCircled } from 'react-icons/rx';

import './OurPricingCard.css';

export default function OurPricingCard() {
  return (
    <div className='pricing-card'>
      <div className='pricing-card-header'>
        <div className='pricing-card-header-details'>
          <h4>Regular Plans</h4>
          <h3>$49 <span className="pricing-period">/Month</span></h3>
        </div>
        <div>
          <img className='pricing-card-icon' src="/image/pricingIcon1_1.svg" alt="Pricing Icon" />
        </div>
      </div>

      <div className='pricing-card-features'>
        <ul>
          <li><span><GiCheckMark className='icon-check'/> 100 GB SSD Storage</span> <RxQuestionMarkCircled className="icon-info" /></li>
          <li><span><GiCheckMark className='icon-check'/> Weekly Backups</span> <RxQuestionMarkCircled className="icon-info" /></li>
          <li><span><GiCheckMark className='icon-check'/> Unlimited Free SSL</span> <RxQuestionMarkCircled className="icon-info" /></li>
          <li><span><GiCheckMark className='icon-check'/> 24/7 System Monitoring</span> <RxQuestionMarkCircled className="icon-info" /></li>
          <li><span><GiCheckMark className='icon-check'/> Free Domain ($9.99)</span> <RxQuestionMarkCircled className="icon-info" /></li>
          <li><span><IoIosClose className='icon-cross'/> Frame 164236</span> <RxQuestionMarkCircled className="icon-info" /></li>
          <li><span><IoIosClose className='icon-cross'/> 20+ Payment Methods</span> <RxQuestionMarkCircled className="icon-info" /></li>
        </ul>
      </div>

      <button className='pricing-button'>
        GET STARTED NOW
      </button>

      <div className='dimoned'>

      </div>
    </div>
  );
}
