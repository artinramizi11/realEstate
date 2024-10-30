import React from 'react'
import '../WhChooseUs/WhyChooseUs.css'

const WhyChooseUs = () => {
  return (
    <div className='chooseUsSection'>
       <div style={{display: 'flex',gap: '20px',alignItems: 'center'}}>
       <div style={{
          width: '20px',
          height: '100px',
          backgroundColor: 'rgb(119, 10, 10)'
        }}></div>
        <div className="title">
          <h1>WHY</h1>
          <h1>Choose Us</h1>
        </div>
       </div>

        <div className="container">
          <div className="card">
          <span class="material-icons">house</span>
          <h1>White Renge Of Properties</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae cum voluptatibus labore ullam dignissimos maxime ex aliquam ducimus, vero commodi!</p>
          </div>
          <div className="card">
          <span class="material-icons">
real_estate_agent
</span>                  <h1>Trusted By Thousands</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae cum voluptatibus labore ullam dignissimos maxime ex aliquam ducimus, vero commodi!</p>
          </div>
          <div className="card">
          <span class="material-icons">payments</span>
          <h1>Financing Made Easy</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae cum voluptatibus labore ullam dignissimos maxime ex aliquam ducimus, vero commodi!</p>
          </div>
        </div>
    </div>
  )
}

export default WhyChooseUs