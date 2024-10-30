import React from 'react'
import './PopularTags.css'

const PopularTags = () => {
  return (
    <div className='popularTags'>
        <h1>Popular Tags</h1>
        <div className="tags" style={{display: 'grid', gridTemplateColumns: '1fr 1fr'}}>
            <p>Houses</p>
            <p>Real Home</p>
            <p>Baths</p>
            <p>Beds</p>
            <p>Garages</p>
            <p>Real Estates</p>
            <p>Family</p>
            <p>Location</p>
            <p>Price</p>
        </div>
    </div>
  )
}

export default PopularTags