import React from 'react'
import '../Assets/about.css'
import Header from './Header'
import { Link } from 'react-router-dom'
import { Fade, Zoom} from 'react-reveal'
import Footer from './Footer'

const About = () => {
  return (
    <div>
    <Header/>
      <div className='about container'>
        <div className='first-about'>
            <Fade right>
                <div className='first-about-image'>
                    <img src='images/Vector01.png'/>
                </div>
            </Fade>
            <Zoom>
                <div className='about-us-text'>
                    <h1>About Us</h1>
                    <p>Valuemax is a fast growing Software development company with special
                    interest in providing solutions that specific local ICT needs in Nigeria 
                    and Africa continent by extension. Currently we focus on web application
                    development, business/organization website design, mobile App development, 
                    Training and human Resource Development</p>
                    <p>With more than a decade experience in the industry, we provide cutting edge/mobile technology
                    services at most competitive price in the market.</p>
                </div>
            </Zoom>
        </div>

        <div className='Services'>
        <h3>What We Do</h3>
          <Fade bottom>
              <div className='services-grid'>
                  <div className='box'>
                      <img src='images/webmobile.png'/>

                      <div className='text-box'>
                          <h6>Innovation Hub</h6>
                          <p>
                              Whether you need a simple static 
                              business website or a massive customized 
                              web application/portal/e-commerce system/business mobile app, Valuemax is here to give you the best at pocket friendly price.
                          </p>
                      </div>    
                  </div>
                  <Fade left>
                  <div className='box'>
                      <img src='images/domain.png'/>

                      <div className='text-box'>
                          <h6>Domain & Hosting</h6>
                          <p>
                              As web agency, we believe nothing 
                              but blazing fast-loading website, blog, 
                              and web application. And that is exact 
                              experience we promise you when 
                              you host with us at Valuemax.
                          </p>
                      </div>
                  </div>
                  </Fade>

                  <Fade left>
                  <div className='box'>
                      <img src='images/marketing2.png'/>

                      <div className='text-box'>
                          <h6>Data Management</h6>
                          <p> 
                              we exercise a unique online
                              marketing strategy that provide innovative, 
                              creative solutions for emerging brands 
                              and well-established companies. We specialize in helping both business-to-consumer and 
                              business-to-business clients gain attention.
                          </p>
                      </div>
                  </div>
                  </Fade>
                  <Fade right>
                      <div className='box'>
                          <img src='images/placement.png'/>

                          <div className='text-box'>
                          <h6>Tech Academy</h6>
                              <p>
                                  Get 100% practical experience! 
                                  we offer training that is personalized 
                                  to suit your learning style, valuemax is 
                                  here to suggests the best course
                                  which suits & promotes your career.
                              </p>
                          </div>
                      </div>
                  </Fade>

                  <Fade right>
                      <div className='box'>
                          <img src='images/Branding.png'/>

                          <div className='text-box'>
                              <h6>Branding & Advertisement</h6>
                              <p>
                                  We offer a complete collection of 
                                  graphic design services to showcase 
                                  your identity. Working with our talented
                                  designers who ably translate your thoughts and ideas 
                                  into creative graphic designs.
                              </p>
                          </div>
                      </div>
                  </Fade>
                  <Fade left>
                      <div className='box'>
                          <img src='images/online.png'/>

                          <div className='text-box'>
                              <h6>Online Services</h6>
                              <p>
                                  We provide a variety of online 
                                  services ranging from registrations, 
                                  payments of electricity bills, DSTV, 
                                  GOTV & STARTIMES subscription and every 
                                  other internet engagement service.
                              </p>
                          </div>
                      </div>
                  </Fade>
              </div>
          </Fade>

          <Fade top>
            <div className='btn'>
              <Link to="/contact">Get A Quote</Link>
            </div>
          </Fade>
        </div>

        <div className='new-about-project'>
            <p>Start a new Project?</p>
            <Link to='/contact'>Get Started</Link>
        </div>

        <Footer/>


      </div>
    </div>
  )
}

export default About