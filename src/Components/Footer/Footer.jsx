// Importing necessary icons
import { IoLogoInstagram, IoRemoveOutline } from 'react-icons/io5';
import './footer.css';
import { FaFacebookF, FaPhone, FaTwitter, FaYoutube } from 'react-icons/fa';
import { MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md';
import { SlCalender } from 'react-icons/sl';
import { IoMdMail } from 'react-icons/io';
import { FaPhoneFlip } from 'react-icons/fa6';

// Footer component definition
export default function Footer() {
  return (
    <>
      {/* Footer Header Section */}
      <section className='footer-header'>
        <div className='IT-image'>
        </div>
        <p>Stay Connected With Cutting Edge IT</p>
        <button>Talk To A Specialist ➔</button>
      </section>
      
      {/* Main Footer Section */}
      <section className='footer-container'>
        {/* Logo and Description Section */}
        <div className='footer-brand'>
          <img src="/image/logo.svg" alt="Company logo" />
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint quaerat laudantium dicta. Aperiam repudiandae, dolore obcaecati laudantium culpa non consectetur quidem corrupti minima iusto illum a excepturi aspernatur aliquam iure!</p>
          <div className='footer-social-links'>
            <a href="https://www.facebook.com/mustafaaltimemmie93/"><FaFacebookF /></a>
            <a href="https://www.facebook.com/mustafaaltimemmie93/"><FaTwitter /></a>
            <a href="https://www.facebook.com/mustafaaltimemmie93/"><FaYoutube /></a>
            <a href="https://www.facebook.com/mustafaaltimemmie93/"><IoLogoInstagram /></a>
          </div>
        </div>

        {/* Quick Links Section */}
        <div className='footer-quick-links'>
          <h3>Quick Links</h3>
          <div className='footer-divider'></div>
          <ul>
            <li><MdOutlineKeyboardDoubleArrowRight /> Extech About</li>
            <li><MdOutlineKeyboardDoubleArrowRight /> Our Services</li>
            <li><MdOutlineKeyboardDoubleArrowRight /> Our Blogs</li>
            <li><MdOutlineKeyboardDoubleArrowRight /> FAQs</li>
            <li><MdOutlineKeyboardDoubleArrowRight /> Contact Us</li>
          </ul>
        </div>

        {/* Recent Posts Section */}
        <div className='footer-recent-posts'>
          <h3>Recent Posts</h3>
          <div className='footer-divider'></div>
          <div className='recent-post'>
            <div className='post-details'>
              <img src="/image/footerThumb1_1.webp" alt="Post Thumbnail" />
              <div>
                <span><SlCalender /> 15th April, 2024</span>
                <p>Top 5 Most Famous Technology Trends in 2024</p>
              </div>
            </div>
            <div className='post-details'>
              <img src="/image/footerThumb1_2.webp" alt="Post Thumbnail" />
              <div>
                <span><SlCalender /> 15th April, 2024</span>
                <p>Top 5 Most Famous Technology Trends in 2024</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className='footer-contact'>
          <h3>Contact Us</h3>
          <div className='footer-divider'></div>
          <div className='contact-info'>
            <IoMdMail />
            <a href="mailto:Mustafa.rashid.abbas@gmail.com">Mustafa.rashid.abbas@gmail.com</a>
          </div>
          <div className='contact-info'>
            <FaPhoneFlip />
            <a href="tel:+9647716091119">+964 (771) 609 1119</a>
          </div>

          {/* Email Subscription Form */}
          <div className="email-subscription">
            <input type="email" placeholder="Your email address" className="email-input" />
            <button className="email-submit">➔</button>
          </div>

          {/* Privacy Policy Agreement */}
          <div className="privacy-policy">
            <input type="checkbox" id="agree" className="checkbox-input" />
            <label htmlFor="agree">I agree to the <a href="#">Privacy Policy</a>.</label>
          </div>
        </div>
      </section>

      {/* Copyright and Legal Section */}
      <div className="footer-legal">
        <div className="footer-legal-content">
          <div>©All Copyright 2024 by Entech</div>
          <div>
            <a href="#">Terms & Conditions</a> | 
            <a href="#">Privacy Policy</a>
          </div>
        </div>
      </div>
    </>
  );
}
