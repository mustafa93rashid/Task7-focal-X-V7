import  './ServiceRequirement.css'

export default function ServiceRequirement({number,mtitle,mpargraph}) {
  return (
    <section>
      
    <div className='bgreqcard'>
    <div className='reqcard'>
    <span>{number}</span>
    <h4>{mtitle}</h4>
    <p>{mpargraph}</p>
</div>

</div>
</section>
  )
}
