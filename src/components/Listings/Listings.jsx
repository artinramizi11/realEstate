import React, { useContext } from 'react'
import './Listings.css'
import ListingsItems from './ListingsItems'
import {FilterContext} from '../FilterContext'


const Listings = () => {

  const { keyword,setKeyword , propertyType,  setPropertyType , location , setLocation , filteredData, resetFilterBtn } = useContext(FilterContext)

  return (
    <div style={{padding: '30px'}}>
      <div className="title">
        <h4>Home / Listings</h4>
        <h1>List View</h1>

        <div className="searchForm">
            <input type='text' placeholder='Enter Keyword...' onChange={(e) => setKeyword(e.target.value)} value={keyword} />
            <select onChange={(e) => setPropertyType(e.target.value)}>
  <option value="" >Property Type</option>
  <option value="for sale">For Sale</option>
  <option value="for rent">For Rent</option>
</select>

            <select  onChange={(e) => setLocation(e.target.value)}>
                <option value=''>Location</option>
                <option value='chicago il'>Chicago</option>
                <option value='miami'>Miami</option>
                <option value='san francisco'>San Francisco</option>
                <option value='toronto ca'>Toronto</option>
            </select>
            <button style={{color: 'white', backgroundColor: 'black',cursor: 'pointer'}} onClick={resetFilterBtn}>Reset Filter</button>
        </div>

        <h6>{filteredData.length} search results for {keyword.length === 0 ? '/' : keyword} {propertyType.toUpperCase()} / {location.toUpperCase()} </h6>
        <ListingsItems filteredData={filteredData} />

         
    </div>
    </div>
  )
}

export default Listings