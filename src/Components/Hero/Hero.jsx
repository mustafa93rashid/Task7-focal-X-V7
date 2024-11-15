import "./Hero.css";
import { CiWavePulse1 } from "react-icons/ci";
import { GiCheckMark } from "react-icons/gi";
import { FaStar } from "react-icons/fa";

export default function Hero({ v, title, Section }) {
  return (
    <header>
      {/* Hero of Home Section */}
      {v && (
        <section>
          <div className="MR-hero-section">
            <div className="row MR-hero-main-content">
              {/* Main Heading and Call to Action */}
              <div className="col-lg-8 col-md-12 col-sm-12 MR-hero-info">
                <div className="MR-hero-header">
                  <p>
                    <CiWavePulse1 className="MR-pulse-icon" /> Everything You
                    Need to Create a Website
                  </p>
                  <h2>Business Innovation with IT Services Expertise</h2>

                  {/* Key Feature List */}
                  <div className="MR-feature-list">
                    <ul>
                      <li>
                        <GiCheckMark /> Development and Support
                      </li>
                      <li>
                        <GiCheckMark /> Discovery and Analysis
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <GiCheckMark /> Flexibility and Adaptability
                      </li>
                      <li>
                        <GiCheckMark /> Competitive Advantage
                      </li>
                    </ul>
                  </div>

                  {/* Get Started Button */}
                  <div>
                    <button className="MR-cta-button">
                      <span>GET STARTED ➔</span>
                    </button>
                  </div>
                </div>

                {/* User Reviews Section */}
                <div className="row MR-reviews-container">
                  <div className="col-lg-6 col-md-12  MR-review-card">
                    <h2 className="MR-review-title">
                      <FaStar className="MR-review-icon" /> Trustpilot
                    </h2>
                    <div className="MR-review-content">
                      <img
                        className="MR-review-image"
                        src="/image/profileShape1_1.webp"
                        alt="Profile"
                      />
                      <div>
                        <div className="MR-rating-stars">
                          <FaStar className="MR-rating-starsin"/>
                          <FaStar className="MR-rating-starsin"/>
                          <FaStar className="MR-rating-starsin"/>
                        </div>
                        <p>450+ reviews</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-12  MR-review-card">
                    <h2 className="MR-review-title">Google</h2>
                    <div className="MR-review-content">
                      <img
                        className="MR-review-image"
                        src="/image/profileShape1_1.webp"
                        alt="Profile"
                      />
                      <div>
                        <div className="MR-rating-stars">
                          <FaStar className="MR-rating-starsin"/>
                          <FaStar className="MR-rating-starsin"/>
                          <FaStar className="MR-rating-starsin" />
                        </div>
                        <p>450+ reviews</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Image Section */}
              <div className="col-lg-4 col-md-12 col-sm-12 ">
                <img
                  className="MR-main-hero-image"
                  src="/image/heroThumb1_1.webp"
                  alt="Hero"
                />
                <div>
                  <img
                    className="MR-decorative-shape1"
                    src="/image/heroShape1_1.webp"
                    alt="Shape 1"
                  />
                  <img
                    className="MR-decorative-shape2"
                    src="/image/heroShape1_2.webp"
                    alt="Shape 2"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Hero of About and Contact Section */}
      {!v && (
        <section>
          <div className="MR-hero2-section">
            <div className="MR-overlay">
              <h2>{title}</h2>
              <p>
                <a href="#home">Home</a> &gt; <span>{Section}</span>
              </p>
            </div>
          </div>
        </section>
      )}
    </header>
  );
}
