import { HiOutlineArrowLongLeft, HiOutlineArrowLongRight } from 'react-icons/hi2'
import './Testimonils.css'
import testimg1 from '/image/blogThumb1_2.webp';


export default function Testimonils() {
  return (
    <section className='Testimonils-section'>
    <div>
    <p className='Testimonils-title'>
        <HiOutlineArrowLongLeft /> TESTIMONILS <HiOutlineArrowLongRight />
      </p>
      <h3 className='Testimonils-description'>Our Lastet Feedback Client Feedback</h3>
    </div>
    

    <div className='blogcard-flex'>
        {[{img: testimg1, pargraph: ' "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat dolorem quia neque accusamus ad."' , name:'Kristin Watson', postion:'Web Designer'}, 
        {img: testimg2, pargraph: ' "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat dolorem quia neque accusamus ad."' , name:'Kristin Watson', postion:'Web Designer'},  
        {img: testimg3, pargraph: ' "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat dolorem quia neque accusamus ad."' , name:'Kristin Watson', postion:'Web Designer'}, ]
        .map((data, index) => (
            <TestimonilsCard
            key={index}
            img={data.img}
            pargraph={data.pargraph}
            name={data.name}
          />
        ))}
      </div>
    </section>
  )
}
