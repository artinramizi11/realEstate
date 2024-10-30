import React from 'react'

const Description = ({item}) => {
  return (
    <div style={{backgroundColor: 'white', padding: '10px'}}>
        <h1>Description</h1>
        <div style={{width: '130px', height: '6px', backgroundColor: 'rgb(119, 10, 10)'}}></div>
        <p>{item.description}</p>
    </div>
  )
}

export default Description