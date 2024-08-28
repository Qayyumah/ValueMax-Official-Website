import React from 'react'
import { Link } from 'react-router-dom'
import '../Assets/contact.css'
import Header from './Header'
import Footer from './Footer'
import { Fade, Zoom } from 'react-reveal'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'

const Contact = () => {
  const schema = yup.object().shape({
    Name: yup.string().required('This field is required'),
    email: yup.string().email('Email is not valid').required('Email is required!'),
    number: yup.string().required('Phone number is required').matches(/^\d{11}$/, 'Phone number is not valid'),
    message: yup.string()

  })
  const {register, handleSubmit, formState: {errors}} = useForm({
    resolver: yupResolver(schema)
  })
  const onSubmit = ()=>{

  }
  return (
    <div>
    <Header/>
        <div className='contact-container'>
          <h2> Get in touch with us</h2>
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
              <form className='contact-inputs' onSubmit={handleSubmit(onSubmit)}>
                <div className='contact-input1'>
                  <label for='name'>Enter your name</label>
                  <input type='text' {...register('Name')}/>
                  <p>{errors.Name?.message}</p>
                </div>
                <div className='contact-input1'>
                  <label for='name'>Enter your phone number</label>
                  <input type='text' {...register('number')}/>
                  <p>{errors.number?.message}</p>
                </div>
                <div className='contact-input1'>
                  <label for='name'>Enter your E-mail</label>
                  <input type='text' {...register('email')}/>
                  <p>{errors.email?.message}</p>
                </div>
                <div className='contact-input1'>
                  <label for='name'>Message</label>
                  <textarea {...register('message')}/>
                  <p>{errors.message?.message}</p>
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