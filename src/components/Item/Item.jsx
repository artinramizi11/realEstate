import React from 'react'
import './Item.css'
import { Link, Navigate, useNavigate } from 'react-router-dom'

const Item = ({item}) => {

    const Navigate = useNavigate()

   const handleChange = () => {
    Navigate(`/find/${item.id}`)
   }
  return (
    <div className='item' onClick={handleChange} style={{
        backgroundImage: `url(${item.wallpaper})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: 'red',
    }}>
       <div className="top">
        <h4 className='bgGreen'>${item.price}</h4>
        {item.status === 'For Sale' ? <h4 style={{backgroundColor: 'rgb(119, 10, 10)', color: 'white',padding: '10px'}}>For Sale</h4> : <h4 className='bgBlue'>For Rent</h4>}
        </div>
        <div className="bottom">
            <div className="itemTitle">
            <h4 className='colorWhite'>{item.title}</h4>
            <h4 className='colorWhite'>{item.secondtitle}</h4>
            <div className="onHover">
                {item.area ?
                 <div className="area">
                    <p className='colorCloseWhite'>Area</p>
                    <p className='colorWhite'>{item.area}</p> 
                 </div>
                 :
                  null}
                {item.rooms ? <div className="rooms">
                    <p className='colorCloseWhite'>Rooms</p>
                    <p className='colorWhite'>{item.rooms}</p>
                </div> : null}
                {item.beds ? 
                <div> 
                    <p className='colorCloseWhite'>Beds</p>
                    <p className='colorWhite'>{item.beds}</p>
                </div>
                : null}
                {item.baths ? <div className='baths'>
                    <p className='colorCloseWhite'>Baths</p>
                    <p className='colorWhite'>{item.baths}</p>
                </div> : null}
            </div>
            </div>
            
        </div>
       </div>
  )
}

export default Item