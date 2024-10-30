import React from 'react'

const Location = () => {
  return (
    <div style={{backgroundColor: 'white', padding:'10px', display: 'flex',flexDirection: 'column', gap:'20px'}}>
        <div className="title">
            <h1>Location</h1>
            <div style={{width: '100px', height: '7px', backgroundColor: 'rgb(119, 10, 10)'}}></div>
        </div>
       
        <div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d187673.40777677883!2d23.159137949270164!3d42.695314016876395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa8682cb317bf5%3A0x400a01269bf5e60!2sSofja%2C%20Bullgari!5e0!3m2!1ssq!2s!4v1729339204296!5m2!1ssq!2s" style={{width:"100%", height:"500px", border: '0'}}></iframe>
        </div>        
        
    </div>
)
}

export default Location