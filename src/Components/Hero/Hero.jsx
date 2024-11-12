import './Hero.css';
import { CiWavePulse1 } from "react-icons/ci";
import { GiCheckMark } from "react-icons/gi";
import { FaStar } from "react-icons/fa";

export default function Hero() {
  return (
    <section>
      <div className='hero-section'>
        <div className='row hero-main-content'>

          {/* Main Heading and Call to Action */}
          <div className='col-lg-8 col-md-12 col-sm-12 hero-info'>
            <div className='hero-header'>
              <p><CiWavePulse1 className='pulse-icon' /> Everything You Need to Create a Website</p>
              <h2>Business Innovation with IT Services Expertise</h2>
              
              {/* Key Feature List */}
              <div className='feature-list'>
                <ul>
                  <li><GiCheckMark /> Development and Support</li>
                  <li><GiCheckMark /> Discovery and Analysis</li>
                </ul>
                <ul>
                  <li><GiCheckMark /> Flexibility and Adaptability</li>
                  <li><GiCheckMark /> Competitive Advantage</li>
                </ul>
              </div>

              {/* Get Started Button */}
              <div>
                <button className='cta-button'>
                  <span>GET STARTED ➔</span>
                </button>
              </div>
            </div>

            {/* User Reviews Section */}
            <div className='row reviews-container'>
              <div className='col-lg-6 col-md-12 col-sm-12 review-card'>
                <h2 className='review-title'><FaStar className='review-icon' /> Trustpilot</h2>
                <div className='review-content'>
                  <img className='review-image' src="/image/profileShape1_1.webp" alt="Profile" />
                  <div>
                    <div className='rating-stars'>
                      <FaStar /><FaStar /><FaStar />
                    </div>
                    <p>450+ reviews</p>
                  </div>
                </div>
              </div>

              <div className='col-lg-6 col-md-12 col-sm-12 review-card'>
                <h2 className='review-title'>Google</h2>
                <div className='review-content'>
                  <img className='review-image' src="/image/profileShape1_1.webp" alt="Profile" />
                  <div>
                    <div className='rating-stars'>
                      <FaStar /><FaStar /><FaStar />
                    </div>
                    <p>450+ reviews</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className='col-lg-4 col-md-12 col-sm-12 hero-images'>
            <img className='main-hero-image' src="/image/heroThumb1_1.webp" alt="Hero" />
            <div>
              <img className='decorative-shape1' src="/image/heroShape1_1.webp" alt="Shape 1" />
              <img className='decorative-shape2' src="/image/heroShape1_2.webp" alt="Shape 2" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
