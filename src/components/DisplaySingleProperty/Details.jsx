import React from 'react'

const Details = ({item}) => {
  return (
    <div style={{padding: '10px',backgroundColor: 'white'}}>
        <div className="title">
        <h1>Property Details</h1>
        <div style={{width: '100px', height: '7px', backgroundColor: 'rgb(119, 10, 10)'}}></div>
        <div className="details" style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr'}}>
            <p>Property ID: {item.id}</p>
            <p>Property Price: {item.price}</p>
            <p>Property Baths: {item.baths}</p>
            <p>Property Rooms: {item.rooms}</p>
            <p>Property Garages: {item.garages}</p>
            <p>Year Built: {item.yearbuilt}</p>
        </div>
        </div>
        <h1>Armenities</h1>
        <div style={{width: '100px', height: '7px', backgroundColor: 'rgb(119, 10, 10)'}}></div>
        <div className="armenities" style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr'}}>
            {item.armenities.map((item) => {
                return (
                    <div style={{display: 'flex', alignItems:'center',gap: '10px'}}>
                         <span style={{backgroundColor: 'rgb(119, 10, 10)', color: 'white', padding: '5px',borderRadius: '10px'}} class="material-icons">check</span>
                         <p>{item}</p>
                    </div>
                )
            })}

        </div>
    </div>
  )
}

export default Details