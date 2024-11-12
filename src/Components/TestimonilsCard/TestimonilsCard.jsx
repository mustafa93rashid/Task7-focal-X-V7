import './TestimonilsCard.css'
import { TiStarFullOutline } from 'react-icons/ti'

export default function TestimonilsCard({pargraph, img, name, postion}) {
  return (
    <div>
        <div className='Stars'>
            <TiStarFullOutline />
        <TiStarFullOutline />
        <TiStarFullOutline />
        <TiStarFullOutline />
        <TiStarFullOutline />
        </div>
        <p>{pargraph}</p>
        <div>
            <img src={img} alt="" />
            <div>
                <h3>{name}</h3>
                <span>{postion}</span>
            </div>
            <img src="/public/image/right-quotation-sign-svgrepo-com.svg" alt="" />
        </div>
    </div>
  )
}
