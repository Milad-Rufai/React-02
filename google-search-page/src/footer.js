import React from 'react'
import './Footer.css'
import leaf from './images/carbon.png'

function Footer() {
  return (
    <div className='Footer1'>
        <div className='bottom'>
        <p>Nigeria</p>
        </div>
        <div className='btm' >
        <ul className='list'>
        <li>About</li>
        <li>Advertising</li>
        <li>Business</li>
        <li>How Search works</li>
        </ul>
        <p><img className='leaf-icon' src={leaf} alt='logo'></img>Carbon neutral since 2007</p>
        <ul className='list right'>
        <li>Privacy</li>
        <li>Terms</li>
        <li>Settings</li>
        </ul>
        </div>
        </div>
       
    
  )
}

export default Footer