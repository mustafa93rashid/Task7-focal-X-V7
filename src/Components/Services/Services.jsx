import ServicesCard from '../ServicesCard/ServicesCard';
import './Services.css'
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { HiOutlineArrowLongLeft } from "react-icons/hi2";


import icon1 from './../../../public/image/serviceIcon1_2.svg'
import icon2 from './../../../public/image/serviceIcon1_3.svg'
import icon3 from './../../../public/image/serviceIcon1_4.svg'
import icon4 from './../../../public/image/serviceIcon1_1.svg'


import ServiceRequirement from '../ServiceRequirement/ServiceRequirement';





export default function Services() {
  return (
    <section className='MR-ServiceSection'>
        <p className='destitle'><HiOutlineArrowLongLeft /> OUR SERVICES <HiOutlineArrowLongRight /></p>
        <h3>Elevating Businesses With IT Ingenuity</h3>
        <div className='all-card'>

    <ServicesCard 
    icon={icon1}
    title={'Woo Commerce'}
    pargraph={'WooCommerce is an open-source plugin for the WordPress content management system, used to transform a website into a fully functional online store. It’s one of the most popular solutions for creating eCommerce websites.'}  
    />

    <ServicesCard 
    icon={icon2}
    title={'CRM Solutions'}
    pargraph={'Solutions are software platforms designed to help businesses manage and analyze customer interactions throughout the customer lifecycle. The goal is to improve customer relationships, streamline processes, and increase sales. '}  
    />

    <ServicesCard 
    icon={icon3}
    title={'Web Design'}
    pargraph={'Web Design is the process of creating visually appealing and user-friendly websites that provide a seamless experience for visitors. It combines elements of layout, graphics, colors, fonts, and interactive features to engage users, promote content.'}  
    />

    <ServicesCard 
    icon={icon4}
    title={'Data Guard Sentinel'}
    pargraph={'Data Guard Sentinel likely refers to a system or service dedicated to safeguarding data through monitoring, backup, and security measures. While not a specific product universally recognized across industries, "Data Guard Sentinel" could represent.'}  
    />

        </div >

        <div class="video-container">
    <iframe 
        width="560" 
        height="315" 
        src="https://www.youtube.com/watch?v=YTOEgCxtMEY" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowfullscreen>
    </iframe>
</div>



    <div className='all-servicerq'>

  <ServiceRequirement 
    number={'01'}
    mtitle={'Requirement'}
    mpargraph={'WooCommerce is an open-source plugin for the WordPress content management system,'}
    />

<ServiceRequirement 
    number={'02'}
    mtitle={'UI/UX Design'}
    mpargraph={'WooCommerce is an open-source plugin for the WordPress content management system,'}
    />

<ServiceRequirement 
    number={'03'}
    mtitle={'Prototype'}
    mpargraph={'WooCommerce is an open-source plugin for the WordPress content management system,'}
    />

<ServiceRequirement 
    number={'04'}
    mtitle={'Development'}
    mpargraph={'WooCommerce is an open-source plugin for the WordPress content management system,'}
    />

    
        </div>

        
    </section>
  )
}
