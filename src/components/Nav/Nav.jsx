import React from 'react'
import './Nav.css'
import { Link, NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='nav' style={{backgroundColor: 'rgb(119, 10, 10)', display: 'flex', justifyContent: 'space-between', padding: '20px'}}>
       <div className="leftSide" style={{display: 'flex', gap: '30px'}}>
       <NavLink to='/'>Home</NavLink>
       <NavLink to='/listings'>All Propertys</NavLink>
       <NavLink to='/contact'>Contact With Us</NavLink>
       </div>
        <div className="rightSide">
        <i class="fa-brands fa-facebook"></i>
       <i class="fa-brands fa-instagram"></i>
       <i class="fa-brands fa-twitter"></i>
       <i class="fa-brands fa-youtube"></i>
        </div>
    </div>
  )
}

export default Nav