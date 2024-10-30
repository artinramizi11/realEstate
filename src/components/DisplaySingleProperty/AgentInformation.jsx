import React, { useState } from 'react'
import agentImage from '../../assets/images/agentImage.jpg'
import { useNavigate } from 'react-router-dom'

const AgentInformation = () => {
  const [submit,setSubmit] = useState(false)
  const Navigate = useNavigate()

  function handleChange(e) {
    e.preventDefault()
    alert('You sent the request, the agent will contact you soon')
    Navigate('/')

  }
  return (

  <div style={{padding: '10px',backgroundColor: 'white',borderRadius: '10px'}}>
        <h3>Agent Information</h3>
        <div className="agentInfo" style={{display: 'flex', gap: '10px'}}>
            <img src={agentImage} alt='Agent Image' style={{width: '100px', borderRadius: '50%', border: '4px solid white'}} />
            <div className="agentName">
                <h6>Artin Ramizi</h6>
                <p>Agent of Property</p>
            </div>
        </div>
        <div className="agentInfo2" style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
        <div className="agentInfo2location" style={{display: 'flex', alignItems: 'center'}}>
        <span class="material-icons">location_on</span>
        <h6>Gjilan,Kosovo</h6>
        </div>
        <div className="agentInfo2call" style={{display: 'flex', alignItems: 'center'}}>
        <span class="material-icons">call</span>
        <h6>+383 45 735 382</h6>
        </div>
        <div className="agentInfo2email" style={{display: 'flex', alignItems: 'center'}}>
        <span class="material-icons">email</span>
        <h6>artin11@outlook.com</h6>
        </div>
        </div>
        <h4>Request Inquiry</h4>
           <form onSubmit={handleChange} style={{display: 'flex', flexDirection:'column',gap:'10px'}}>
           <input type='text' placeholder='Full Name' style={{padding: '10px'}} required/>
            <input type='number' placeholder='Your Number' style={{padding: '10px'}}  required/>
            <input type="email" placeholder='Email Address' style={{padding: '10px'}} required />
            <textarea placeholder='Message' style={{padding: '10px',borderRadius: '10px'}} required/>
            <button style={{padding: '10px', color: 'white', border: 'none', backgroundColor: 'rgb(119, 10, 10)',cursor: 'pointer'}}>Submit Request</button>
           </form>
    </div>


  )
}

export default AgentInformation