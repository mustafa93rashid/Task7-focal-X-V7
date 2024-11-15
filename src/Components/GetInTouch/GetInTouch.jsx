import { IoLocation, IoMailOpenSharp } from "react-icons/io5";
import "./GetInTouch.css";
import { FaPhone } from "react-icons/fa";

export default function GetInTouch() {
  return (
    <>
      <div className="row information-container">
        <div className="col-lg-6 col-md-12 col-sm-12">
          <div className="Information">
            <div className="Information-inside">
              <FaPhone className="Information-icon" />
              <div>
                <p>Call Us 7/24</p>
                <a href="tel:+9647716091119">+964 (771) 609 1119</a>
              </div>
            </div>
            <div className="Information-line"></div>
            <div className="Information-inside">
              <IoMailOpenSharp className="Information-icon" />
              <div>
                <p>Make A Quote</p>
                <a href="mailto:Mustafa.rashid.abbas@gmail.com">
                  Mustafa.rashid.abbas@gmail.com
                </a>
              </div>
            </div>
            <div className="Information-line"></div>
            <div className="Information-inside">
              <IoLocation className="Information-icon" />
              <div>
                <p>Location</p>
                <a href="mailto:Mustafa.rashid.abbas@gmail.com">
                  Baqubah, Diyala, Iraq
                </a>
              </div>
            </div>
            <img className="information-img" src="./image/video.webp" alt="" />
          </div>
        </div>

        <div className="col-lg-6 col-md-12 col-sm-12">
        <div className="contact-form">
            <h2>Ready to Get Started?</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames.</p>
            <form>
                <div className="row">
                    <div className="col-lg-6">
                    <div className="form-group">
                    <label htmlFor="name">Your Name*</label>
                    <input type="text" id="name" required />
                </div>

                    </div>
                    <div className="col-lg-6">
                    <div className="form-group">
                    <label htmlFor="email">Your Email*</label>
                    <input type="email" id="email" required />
                </div>
                        
                        </div>





                </div>

                <div className="form-group full-width">
                    <label htmlFor="message">Write Message*</label>
                    <textarea id="message" rows="4" required></textarea>
                </div>
            </form>
            <button type="submit">Send Message ➔</button>

        </div>
        </div>
      </div>


   
      <iframe className="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106696.75885516497!2d44.438133536135425!3d33.311658968933955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15577f67a0a74193%3A0x9deda9d2a3b16f2c!2z2KjYutiv2KfYr9iMINio2LrYr9in2K8g2YXYrdin2YHYuNip2Iwg2KfZhNi52LHYp9mC!5e0!3m2!1sar!2s!4v1724061430275!5m2!1sar!2s"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>





    </>
  );
}
