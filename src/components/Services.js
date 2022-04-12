import React from 'react'
import './Services.css'

const Services = () => {
  return (
    <div>
        <div className='service_section' id='services'>
            <h3>NOS</h3><br/>
            <h1>SERVICES</h1><br/>
            <div className='services_grid_container'>
                <div className='copropriete'>COMPROPRIETE <i className='fas fa-chevron-right'></i></div>
                <div className='planification'>PLANIFICATION FAMILIALE <i className='fas fa-chevron-right'></i></div>
                <div className='immobilier'>IMMOBILIER <i className='fas fa-chevron-right'></i></div>
            </div>
        </div>
    </div>
  )
}

export default Services