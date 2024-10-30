import React from 'react'
import data from '../../data'
import RecentPropertie from './RecentPropertie'

const RecentProperties = () => {
    const recentProperties = data.filter((product) => product.recentProperties === true)
    console.log(recentProperties)
  return (
    <div style={{backgroundColor: 'white', borderRadius: '15px', padding: '10px'}}>
        <h1>Recent Properties</h1>
        {recentProperties.map((item) => {
            return (
                <RecentPropertie key={item.id} item={item} />
            )
        })}
    </div>
  )
}

export default RecentProperties