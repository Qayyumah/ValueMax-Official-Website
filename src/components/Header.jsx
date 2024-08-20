import React from 'react'
import '../Assets/header.css'


const Header = () => {
  return (
    <div className='header-container'>
        <div className='header'>
            <div className='logo'>
                <img src='images/logo44.png' alt='logo'/>
            </div>
            <div className='links'>
                <a href='#'>Home</a>
                <a href='#'>About us</a>
                <a href='#'>Tech Academy</a>
                <a href='#'>innovation Hub</a>
                <a href='#'>Branding & Advert</a>
                <a href='#'>Hosting</a>
                <a href='#'>Blog</a>
                <a href='#'>Contact</a>
            </div>
        </div>
        <div className='header-section'>
            <div className='slider'>
                
            </div>
        </div>
    </div>
  )
}

export default Header