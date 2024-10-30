import React, { useState } from 'react'
import './ForSale.css'
import data from '../../data'
import Item from '../Item/Item'

const ForSale = () => {
  const forSalesItems = data.filter((item) => item.status === 'For Sale')
  const secondItems = data.filter((item) => item.status === 'For Sale').splice(0,3)

  const [showItems,setShowItems] = useState(secondItems)
  const [clickedBtn,setClickedBtn] = useState(true)

  const showMoreBtn = () => {
    setClickedBtn(false)
    setShowItems(forSalesItems)
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
        <h4 className='colorRed'>For Sale</h4>
        </div>
    </div>

  <div className='forSaleItemsContainer'>
   {showItems.map((item) => {
      return (
          <Item key={item.id} item={item} />
      )
    })}
   </div>
   <button className='viewAllBtn' style={{marginTop: '20px', cursor: 'pointer'}} onClick={showMoreBtn}>{clickedBtn ? 'Show More' : 'Show Less'}</button>
  </div>



    </>
  
  )
}

export default ForSale