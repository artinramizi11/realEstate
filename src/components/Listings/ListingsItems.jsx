import React, { useContext } from 'react'
import Item from '../Item/Item'
import './ListingsItems.css'

const ListingsItems = ({filteredData}) => {

  return (
    <div className='itemsContainer'>
        {filteredData.map((it) => {
            return (
                    <Item key={it.id} item={it} onKeyWord={true} />
            )
        })}
    </div>
  )
}

export default ListingsItems