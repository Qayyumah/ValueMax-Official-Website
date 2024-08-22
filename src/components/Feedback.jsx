import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import '../Assets/feedback.css'
import { Fade, Zoom } from 'react-reveal';

const Feedback = () => {

  return (
    <div className='feedback-container'>
        <div className='feedbacks'>
            <h3>WHAT OUR CLIENTS SAY</h3>
        </div>
            <Zoom>
            <div className='clients-feedback-box'>
                <Fade right>
                    <div className='clients-feedback'>
                        <div className='feed'>
                            <h1>Rafiu Adeniran Lawal</h1>  
                            <div className='feedback-img'>
                                <img src='images/star.png'/>
                                <img src='images/star.png'/>
                                <img src='images/star.png'/>
                                <img src='images/star.png'/>
                                <img src='images/star.png'/>
                            </div>
                        </div>
                        <p>ValueMax gave us the best user interface and development
                        in a very short time. We have been using them for the past 
                        3 years without any regret. The team has a very solid
                        knowledge of development technology and communicates with us almost 
                        everytime. The value we get for our money is way too high.</p>
                        <h6>Founder: Building Blocks for Peace Foundation.</h6>
                    </div>
                </Fade>

                <Fade left>
                    <div className='clients-feedback'>
                        <div className='feed'>
                            <h1>CE0, Zedz Foods & Beverages Limited.</h1>  
                            <div className='feedback-img'>
                                <img src='images/star.png'/>
                                <img src='images/star.png'/>
                                <img src='images/star.png'/>
                                <img src='images/star.png'/>
                                <img src='images/star.png'/>
                            </div>
                        </div>
                        <p>One of the good things
                            that happened to us at starting up of our company was our relationship with
                            ValueMax. Our website is one of the instruments of content marketing. It gives us
                            the value and image we represent. Best user interface and good development.
                            The standard of our website design align with our vision and value of our company.
                        </p>
                        <h6>Zedz Foods & Beverages Limited</h6>
                    </div>
                </Fade>

                <Fade right>
                    <div className='clients-feedback'>
                        <div className='feed'>
                            <h1>Peter Christopher</h1>  
                            <div className='feedback-img'>
                                <img src='images/star.png'/>
                                <img src='images/star.png'/>
                                <img src='images/star.png'/>
                                <img src='images/star.png'/>
                                <img src='images/star.png'/>
                            </div>
                        </div>
                        <p>A place to be is Valuemax.
                        You come empty, you go back fulfilled. They satisfy you than your food with valued
                        service
                        delivery, prompt working crew and superb training packages. I can testify that
                        valuemax is really valuable. </p>
                        <h6>Senior
                        Pastor; Prayer Life Bible Church</h6>
                    </div>
                </Fade>

                <Fade left>
                    <div className='clients-feedback'>
                        <div className='feed'>
                            <h1>AYODELE S. LARAIYETAN</h1>  
                            <div className='feedback-img'>
                                <img src='images/star.png'/>
                                <img src='images/star.png'/>
                                <img src='images/star.png'/>
                                <img src='images/star.png'/>
                                <img src='images/star.png'/>
                            </div>
                        </div>
                        <p>ValueMax has helped us with the best by redesigning our website.
                        They not only reduced its loading time by implementing the right
                        technology, but also ensured that it is attractive and easy-to-use.
                        atahey have satisfied my company to the fullest by delivering the 
                        exceptional solutions. ValueMax have great expertise, are dedicated, attentive, talented and care much
                        about the client's needs and are always available to answer my questions and provide feedback.</p>
                        <h6>CEO; Ayogif General Merchant Chandling Services Ltd.</h6>
                    </div>
                </Fade>
            </div>
            </Zoom>
    </div>
  )
}

export default Feedback

