import React, { useState } from 'react'
import data from '../../data'
import Item from '../Item/Item'


const ForRent = () => {

    const forRentItems = data.filter((item) => item.status === 'For Rent')
    const secondItems = data.filter((item) => item.status === 'For Rent').splice(0,2)
  
    const [showItems,setShowItems] = useState(secondItems)
    const [clickedBtn,setClickedBtn] = useState(true)

    const showMoreBtn = () => {
      setClickedBtn(false)
      setShowItems(forRentItems)
      if(clickedBtn === false) {
        setShowItems(secondItems)
        setClickedBtn(true)
      }
    }

  return (
    <>
    <div className='forSaleSection'>
    <div className='titleContainer'>
         <div className='redbox'></div>
         <div className='title'>
         <h1>Properties</h1>
         <h4 className='colorRed'>For Rent</h4>
         </div>
     </div>
 
    <div className='forSaleItemsContainer'>
    {showItems.map((item) => {
       return (
           <Item key={item.id} item={item} />
       )
     })}
    </div>
 
    <div className="btn">
    <button className='viewAllBtn' style={{marginTop: '20px', cursor: 'pointer'}} onClick={showMoreBtn}>{clickedBtn ? 'Show More' : 'Show Less'}</button>
    </div>
 
    </div>
 
     </>
  )
}

export default ForRent