import React from 'react'
import './Centre.css'
import logo from './images/logo.png'

function Centre() {
  return (
    <div className='Centre'>
    <img className='Centre-logo' src={logo} alt='logo'></img>
    <br></br>
    <input className='search' type='search bar'></input>
    <div>
        <button className='btn' href='#'>Google Search</button>
        <button className='btn' href='#'>I'm Feeling Lucky</button>
    </div>
    <div>Google offered in: <a href='#'>Hausa</a> <a href='#'>Igbo</a> <a href='#'>Ede Yoruba</a> <a href='#'>Nigerian Pidgin</a></div>
    </div>
  )
}

export default Centre;