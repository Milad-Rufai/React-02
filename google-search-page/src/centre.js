import React from 'react'
import './Centre.css'
import logo from './images/logo.png'
import mic from './images/mic.png'
import imagesearch from './images/imagesearch.png'
import { useState } from 'react';



function Centre() {
  const [searchTerm, setSearchTerm] = useState('');
  const [listItems, setListItems] = useState('');

const handleChange = (event) => {
  setSearchTerm(event.target.value)
}

const handleKeyDown = (event) => {
  if(event.key === 'Enter'){
    setListItems(searchTerm)
  }
}
  
  return (
    <div className='Centre'>
      <img className='Centre-logo' src={logo} alt='logo'></img>
      <br></br>
        <input className='search' type='search-bar' onChange={handleChange} onKeyDown={handleKeyDown}></input>
        <img className='search-icon icn1' src={mic} alt='logo'></img>
        <img className='search-icon icn2' src={imagesearch} alt='logo'></img>
      <h2 className='search-list'>
        {listItems}
      </h2>
      <div>
        <button className='btn' href='#'>Google Search</button>
        <button className='btn' href='#'>I'm Feeling Lucky</button>
      </div>
      <div className='languages' >Google offered in: <a href='#'>Hausa</a> <a href='#'>Igbo</a> <a href='#'>Èdè Yorùbá</a> <a href='#'>Nigerian Pidgin</a></div>
    </div>
  )
}

export default Centre;