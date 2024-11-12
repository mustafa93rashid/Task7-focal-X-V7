import './ServicesCard.css'

export default function ServicesCard({icon,title,pargraph}) {
  return (
    <div className='card1'>
        <img src={icon} alt="Woo Commerce"/>
        <h4>{title}</h4>
        <p>{pargraph}</p>
        <button>Read more</button>
    </div>
  )
}
