import React from 'react'
import { Link } from 'react-router-dom'
import '../Assets/contact.css'
import Header from './Header'
import Footer from './Footer'
import { Fade, Zoom } from 'react-reveal'

const Contact = () => {
  return (
    <div>
    <Header/>
        <div className='contact-container'>
          <div className='contact-box'>
            <div className='contact-box1'>
              <div className='box1-header'>
                <h3>Contact Information</h3>
              </div>
              <div className='contact-address'>
                <div className='address1'>
                  <img src='images/address.png'/>
                  <p>30, Old FinBank Building: Opp UI Post Office,
                  3rd Building after FCMBank: UI-Ojoo Road, Ibadan</p>
                </div>
                <div className='address1'>
                  <img src='images/mail.png'/>
                  <p>admin@valuemaxonline.com</p>
                </div>
                <div className='address1'>
                  <img src='images/phone-call.png'/>
                  <p>09097221954</p>
                </div>
              </div>
              <Fade right>
              <div className='contact-icon'>
                <img src='images/facebook.png'/>
                <img src='images/twitter.png'/>
                <img src='images/instagram.png'/>
                <img src='images/whatsapp.png'/>
              </div>
              </Fade>
            </div>

            <Zoom>
            <div className='contact-box2'>
              <form className='contact-inputs'>
                <div className='contact-input1'>
                  <label for='name'>Enter your name</label>
                  <input type='text'/>
                </div>
                <div className='contact-input1'>
                  <label for='name'>Enter your phone number</label>
                  <input type='text'/>
                </div>
                <div className='contact-input1'>
                  <label for='name'>Enter your E-mail</label>
                  <input type='text'/>
                </div>
                <div className='contact-input1'>
                  <label for='name'>Message</label>
                  <textarea/>
                </div>

                <Fade bottom>
                  <div className='btn-contact'>
                    <button type='submit'>Send</button>
                  </div>
                </Fade>
              </form>
            </div>
            </Zoom>
          </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Contact