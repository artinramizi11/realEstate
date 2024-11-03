import React, { useRef }  from "react";
import '../WhChooseUs/WhyChooseUs.css';

const WhyChooseUs = () => {

  return (
    <div className='chooseUsSection section'>
      <div style={{display:'flex',gap:'10px',alignItems:'center'}}>
        <div className="box"></div>
        <div className="title">
          <h1>WHY</h1>
          <h1>Choose Us</h1>
        </div>
      </div>

      <div className="container" style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr'}}>
        <div className="card">
          <span class="material-icons">house</span>
          <h1>White Renge Of Properties</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            cum voluptatibus labore ullam dignissimos maxime ex aliquam ducimus,
            vero commodi!
          </p>
        </div>
        <div className="card">
          <span class="material-icons">real_estate_agent</span>{" "}
          <h1>Trusted By Thousands</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            cum voluptatibus labore ullam dignissimos maxime ex aliquam ducimus,
            vero commodi!
          </p>
        </div>
        <div className="card">
          <span class="material-icons">payments</span>
          <h1>Financing Made Easy</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            cum voluptatibus labore ullam dignissimos maxime ex aliquam ducimus,
            vero commodi!
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
