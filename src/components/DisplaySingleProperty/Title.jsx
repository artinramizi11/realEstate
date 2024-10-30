import React from 'react'

const Title = ({item}) => {
  return (
    <div style={{display: 'flex', justifyContent: 'space-between'}}>
       <div className="leftSide" style={{display: 'flex', flexDirection: 'column'}}>
       <div className="title-1" style={{display: 'flex', gap: '10px', alignItems: 'center'}}>
          <h1>{item.title}</h1>
          <p style={{backgroundColor: 'rgb(119, 10, 10)', color: 'white', padding: '7px', borderRadius: '20px'}}>{item.status}</p>
        </div>
        <div className="title-2" style={{display: 'flex',gap: '10px', alignItems: 'center'}}>
          <span class="material-icons">location_on</span>
          <h1>{item.secondtitle}</h1>
        </div>
       </div>
        <div className="right-side">
          <h1 style={{color: 'rgb(119, 10, 10)'}}>$ {item.price}</h1>
        </div>
    </div>
  )
}

export default Title