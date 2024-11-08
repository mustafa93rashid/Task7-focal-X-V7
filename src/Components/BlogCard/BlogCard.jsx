import { HiOutlineArrowLongRight } from 'react-icons/hi2';
import './BlogCard.css';

export default function BlogCard({ Blogimg, Blogbutton, Blogdate, Blogtitle, Blogadminimg }) {
  return (
    <div className='blog-parent'>
      <img className='Blogimg' src={Blogimg} alt="blog" />
      <div className='Blogcard-Container'>
        <div className='Blogcard-date'>
          <button>{Blogbutton}</button>
          <p>{Blogdate}</p>
        </div>
        <h4>{Blogtitle}</h4>
        <div className='blogline'></div>
        <div className='BlogCard-footer'>
          <div className='BlogCard-footer-rgtside'>
            <img src={Blogadminimg} alt="admin" className='admin-img' />
            <div>
              <h5>Admin</h5>
              <span>Co, Founder</span>
            </div>
          </div>
          <button className='arrow-button'>
            <HiOutlineArrowLongRight />
          </button>
        </div>
      </div>
    </div>
  );
}

