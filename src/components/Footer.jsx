import React from 'react'
import { Link } from 'react-router-dom'
import '../Assets/footer.css'

const Footer = () => {
  return (
    <div>
        <div className='footer'>
            <div className='footer-head'>
                <h1>Value<span>Max</span></h1>
                <p>We are a digital platform that offers 
                varying services, customers satisfaction is 
                our drive without mincing our standard!</p>
            </div>
            <div className='footer-links'>
                <div className='about-link'>
                    <h3>About Us</h3>
                    <Link to='/about'>About Us</Link>
                    <Link to=''>Hosting and Domain</Link>
                    <Link to=''>Buy Data</Link>
                    <Link to=''>News</Link>
                    <Link to=''>Contact Us</Link>
                </div>

                <div className='training-link'>
                    <h3>Training</h3>
                    <Link to=''>Front End</Link>
                    <Link to=''>Server-side</Link>
                    <Link to=''>Data Science</Link>
                    <Link to=''>Mobile App</Link>
                    <Link to=''>CMS based Web Design</Link>
                    <Link to=''>Digital Marketing</Link>
                    <Link to=''>Desktop Application</Link>
                    <Link to=''>Basic Computer</Link>
                    <Link to=''>Graphics Design</Link>
                </div>

                <div className='office'>
                    <h3>Office</h3>
                    <p>30, Old Finbank Building: Opp UI Post Office, 3rd Building after FCMB;</p>
                    <p>UI Ojoo Road, Ibadan</p>
                    <p>admin@valuemaxoniline.com</p>
                    <p>+2349097221954</p>
                </div>
            </div>

            <div className='Footer'>
                <p>©ValueMaxCodeLab 2007</p>
            </div>
        </div>
    </div>
  )
}

export default Footer