import './Hero.css';
import { FaArrowRightLong } from "react-icons/fa6";
import { CiWavePulse1 } from "react-icons/ci";
import { GiCheckMark } from "react-icons/gi";
import { FaStar } from "react-icons/fa";


export default function Hero() {
  return (
    <div className='Hero'>
      <div className='HeroLftsd'>
        <p><CiWavePulse1 /> Every Thing You Need To Create A Website</p>
        <h2>Business Innovation With IT Services Expertise</h2>

        <div className='list'>
          <ul>
            <li><GiCheckMark /> Development and Support</li>
            <li><GiCheckMark /> Discovery and Analysis</li>
          </ul>
          <ul>
            <li><GiCheckMark /> Flexibility and Adaptability</li>
            <li><GiCheckMark /> Competitive Advantage</li>
          </ul>
        </div>
        
        <div>
          <button>
            <div>GET STARTED</div>
            <div><FaArrowRightLong /></div>
          </button>
        </div>
        <div className='Reviews'>
          <div>
        <h2> <FaStar className='star'/>Trustipilot</h2>
            <div className='LeftSideReviews'>
              <div>
              <img className='Reviewsimg' src="/image/profileShape1_1.webp" />
              </div>
              <div className='ReviewsStars'>
                <div className='threestars'>
              <FaStar /><FaStar /><FaStar /></div>
              <p>450+ reviews</p>
              </div>
            </div>

        </div>

        <div className='line'></div>

        <div>
        <h2>Google</h2>
            <div className='LeftSideReviews'>
              <div >
              <img className='Reviewsimg' src="/image/profileShape1_1.webp" />
              </div>
              <div className='ReviewsStars'>
                <div className='threestars'>
              <FaStar /><FaStar /><FaStar /></div>
              <p>450+ reviews</p>
              </div>
            </div>
        </div>
        </div>


      </div>
      <div className='Heroshape1'>
      </div>

      <div className='HeroRgtsd'></div>
      <div className='Heroshape2' ></div>
    </div>
  );
}
