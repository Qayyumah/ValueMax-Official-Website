import React from 'react'
import '../Assets/training.css'
import Header from './Header'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import TrainingDetails from './TrainingDetails'

const Training = () => {
  return (
    <div>
    <Header/>
        <body className='training-section'>
            <div className='training-intro'>
                <div  className='training-text'>
                    <h1>OUR TRAINING APPROACH</h1>
                    <p>Valuemax is neck-deep in training and human resources 
                        development. We take all our trainings and courses very 
                        seriously because it serves as one major channel through which
                        we recruit members of our team as well as recruit IT staff for 
                        other Companies/Organizations we partner with. Thus, all our trainings
                        are completely practical and project-based. We encourage you to have a personal 
                        computer of your own to practice with and be ready for lots of real time live project.
                    </p>
                    <p style={{marginBottom:'20px'}}>
                        At Valuemax, we have diverse array of niche software programmers 
                        and artists coming from different programming language background 
                        with many years of experience of active app development and designs. 
                        So whether you are a green horn in computer world or an average user, 
                        you can be sure we have a place for you.
                    </p>
                    <Link>Apply Now</Link>
                </div>
                <div className='training-img'>
                    <img src='images/tranining.webp'/>
                </div>
            </div>
            
            <TrainingDetails/>
        </body>
    <Footer/>
    </div>
  )
}

export default Training