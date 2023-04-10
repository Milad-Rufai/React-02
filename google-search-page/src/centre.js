import React from 'react'
import './Centre.css'
import logo from './images/logo.png'
import mic from './images/mic.png'
import imagesearch from './images/imagesearch.png'
import { useState } from 'react';



function Centre() {
  const [searchTerm, setSearchTerm] = useState('');
  const [listItems, setListItems] = useState([]);
  return (
    <div className='Centre'>
      <img className='Centre-logo' src={logo} alt='logo'></img>
      <br></br>
        <form onSubmit={(event) => {
          event.preventDefault();
          setListItems([...listItems, searchTerm]);
          setSearchTerm('');
        }}>
        <input className='search' type='search-bar'></input>
        <img className='search-icon icn1' src={mic} alt='logo'></img>
        <img className='search-icon icn2' src={imagesearch} alt='logo'></img>
        </form>
      <ul className='search-list'>
        {listItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <div>
        <button className='btn' href='#'>Google Search</button>
        <button className='btn' href='#'>I'm Feeling Lucky</button>
      </div>
      <div className='languages' >Google offered in: <a href='#'>Hausa</a> <a href='#'>Igbo</a> <a href='#'>Èdè Yorùbá</a> <a href='#'>Nigerian Pidgin</a></div>
    </div>
  )
}

export default Centre;