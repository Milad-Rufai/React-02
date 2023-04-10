import React from 'react'
import './header.css'
import appmenu from './images/appmenu.png'
import user from './images/user.png'


function Header() {
  return (
    <>
    <div className='head'>
    <p>Gmail</p>
    <p>Images</p>
    <p><img className='icon' src={appmenu} alt='logo'></img></p>
    <p><img className='icon user' src={user} alt='logo'></img></p>
    </div>
    </>
  )
}

export default Header;