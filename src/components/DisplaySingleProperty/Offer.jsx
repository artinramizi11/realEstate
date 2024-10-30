import React from 'react'
import banner from '../../assets/images/banner.jpg'

const Offer = () => {
  return (
    <div style={{backgroundColor: 'white', padding: '20px', borderRadius: '10px'}}>
        <h4>Special offer for the day</h4>
        <img src={banner} width="100%" />
    </div>
  )
}

export default Offer