import { HiOutlineArrowLongLeft, HiOutlineArrowLongRight } from 'react-icons/hi2'
import './Contactus.css'

export default function Contactus() {
  return (
    <section className='parent'>
        <div className='contact-section'>
            <div><img className='contact-image' src="/image/ctaThumb1_1.webp" alt="" /></div>

            <div className='contact-deatils'>
                <h3><HiOutlineArrowLongLeft /><span>  CONTACT US  </span><HiOutlineArrowLongRight /></h3>
                <p>24/7 Expert Hosting Support Our Customers Love</p>
            </div>

            <div>
                <button> TALK TO A SPECIALST <HiOutlineArrowLongRight/></button>
            </div>
        </div>
    </section>
  )
}
