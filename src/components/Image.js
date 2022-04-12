import React from 'react'
import './image.css'
import houses from '../assets/bg-houses.png';

const Image = () => {
  return (
    <div className='image_container'>
        <img src={houses} className='house_img' alt='houseImage'/>
    </div>
  )
}

export default Image