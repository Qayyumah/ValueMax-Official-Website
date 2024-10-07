import React from 'react'
import { Link } from 'react-router-dom'
import '../Assets/training.css'
import styled from 'styled-components'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TrainingDetails = () => {
    let settings = {
        dots: false,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    }
  return (
    <div>
        <section className='training-details'>
            <h1>Training Details and Schedules</h1>
            <header className='training-header'>
                <Link to='#coding'>Coding</Link>
                <Link to='/'>Non-Coding</Link>
                <Link to='/'>Timetable</Link>
            </header>

            <Carousel {...settings}>
                <div className='web-program' id='coding'>
                    <div className='web-program-main'>
                        <h2>Web App Programming</h2>
                        <p>
                            Web app programming refers to the development of application that run on the web/browser 
                            rather than being installed locally on user's device. Web app programming involves creating 
                            the front-end/user interface of the application, as well as the back-end logic/server-side scripting to enable 
                            the application function and interact with other systems and database.
                            For the purpose of learning, monitoring and evaluating students and the demand in the industry, 
                            we divide this module into 2 major categories: Front-end development and Server-side development.
                        </p>
                    </div>
                    <div className='web-program-modules'>
                        <div className='module-one'>
                            <h2>FIRST MODULE: FRONT-END PROGRAMMING:</h2>
                            <div className='stages'>
                                <div className='stage-one'>
                                    <h3>STAGE 1: Responsive Web Interface/Design</h3>
                                    <p>
                                        In this module, the student will be exposed to all the 
                                        details of HTML 5, CSS syntax, media queries, Bootstrap/Foundation/Semantic UI, remote server management, Git and Github for version control.
                                    </p>
                                    <p>
                                        The utmost goal here is to lead the student to building any responsive web interface/design that may come their way. Each student will be deploying 
                                        their own application/web interface to demonstrate that learning has taken place.
                                    </p>

                                    <div className='stage-one-duration'>
                                        <span>
                                            <label>Duration:</label>
                                            <p>2 Months</p>
                                        </span>

                                        <span>
                                            <label>Course Fee:</label>
                                            <p>60,000</p>
                                        </span>

                                        <span>
                                            <p>Installments Yes/30, 000 Monthly</p>
                                        </span>
                                        <div className='stage-btn'>
                                            <Link to=''>See Outline</Link>
                                            <Link to=''>Apply Now</Link>
                                        </div>
                                    </div>
                                </div>

                                <div className='stage-two'>
                                    <h3>STAGE 2: Javascript and its Libraries</h3>
                                    <p>
                                        Javascript is one of the most popular programming languages by popular demand. 
                                        This course will cover all the basic syntax of javascript, functions and classes, 
                                        DOM Manipulation, form validation,JS properties and methods, working with time and 
                                        date and debugging js code. We will also cover JS component design, conditional rendering, 
                                        useState, useEffect and many more. The student will be led to building 
                                        various front-end based JS applications to demonstrate that learning has indeed taken place.
                                    </p>

                                    <div className='stage-one-duration'>
                                        <span>
                                            <label>Duration:</label>
                                            <p>2 Months</p>
                                        </span>

                                        <span>
                                            <label>Course Fee:</label>
                                            <p>60,000</p>
                                        </span>

                                        <span>
                                            <p>Installments Yes/30, 000 Monthly</p>
                                        </span>
                                        <div className='stage-btn'>
                                            <Link to=''>See Outline</Link>
                                            <Link to=''>Apply Now</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='module-two'>
                            <h2>SECOND MODULE: BACK-END PROGRAMMING:</h2>
                            <p>Server-side Programming uses database technologies and server-side scripting languages to create a dynamic website.
                                Note that knowledge of front-side web programming is a prerequisite for enrolling in the server-side class.
                                By taking this course, you will be able to create and manage server-based applications and API building using server scripting language.
                            </p>
                            <p>
                                To do this you are expected to pick any of: PHP | NODE.JS | PYTHON-DJANGO OR PHYTHON-FLASK and any of the following 
                                databases technology: MYSQL | POSTGRESQL | MONGODB. We will also learn:We will also learn:JSON, AJAX, API INTEGRATION.
                            </p>

                            <div className='backend-stage'>
                                        <span>
                                            <label>Duration:</label>
                                            <p>2 Months</p>
                                        </span>

                                        <span>
                                            <label>Course Fee:</label>
                                            <p>60,000</p>
                                        </span>

                                        <span>
                                            <p>Installments Yes/30, 000 Monthly</p>
                                        </span>
                                        <div className='stage-btn-backend'>
                                            <Link to=''>See Outline</Link>
                                            <Link to=''>Apply Now</Link>
                                        </div>
                                    </div>
                        </div>
                    </div>
                </div>

                <div className='web-program'>
                    <div className='web-program-main'>
                        <h2>PYTON PROGRAMMING</h2>
                        <p>Python programming is one of the most in-demand 
                        programming languages globally for its general purpose capability in data science,web development and scientific computing.
                        For this purpose of learning , evaluationa and monitoring and the demand in the industry, 
                        we divide this module into 3 stages:</p>
                    </div>

                    <div className='stages'>
                        <div className='stage-one'>
                            <h3>STAGE 1: BASIC PYTHON PROGRAMMING</h3>
                            <p>At this stage,you will learn all the syntax of python programming, 
                                including variables and conditionals, looping and iteration, functions and classes,lambda and importing modules in python.
                            </p>
                            <p>This wil give you a strong foundation in the world of python for data science, artificial intelligence, 
                                and machine learning, back-end for web app programming, desktop application, and device programming.
                            </p>

                            
                            <div className='stage-one-duration'>
                                <span>
                                    <label>Duration:</label>
                                    <p>1 Months</p>
                                </span>

                                <span>
                                    <label>Course Fee:</label>
                                    <p>30,000</p>
                                </span>
                                <div className='stage-btn'>
                                    <Link to=''>See Outline</Link>
                                    <Link to=''>Apply Now</Link>
                                </div>
                            </div>
                        </div>
                        <div className='stage-two'>
                            <h3>STAGE 2: DATA SCIENCE | MACHINE LEARNING</h3>
                            <p>At this stage, we will tailor your knowledge of python towards best practice in data science such as file handling, dataframe, data cleaning and formatting, Numpy, Pandas, Matplolip, Seaborn, Scipy, Statsmodel and Scikit-Learn, 
                            analyzing millions of data and building simpler applications with the knowledge gained, and train your model.</p>
                            <span>(NB: Please note that the knowledge of basic python programming is required.)</span>

                            
                            <div className='stage-one-duration'>
                                <span>
                                    <label>Duration:</label>
                                    <p>2 Months</p>
                                </span>

                                <span>
                                    <label>Course Fee:</label>
                                    <p>60,000</p>
                                </span>

                                <span>
                                    <p>Installments Yes/30, 000 Monthly</p>
                                </span>
                                <div className='stage-btn'>
                                    <Link to=''>See Outline</Link>
                                    <Link to=''>Apply Now</Link>
                                </div>
                            </div>
                        </div>
                        <div className='stage-three'>
                            <h3>STAGE 3: ARTIFICIAL INTELLIGENCE</h3>
                            <p>At this stage, we will cover four subfields in artificial intelligence namely: Natural Language Processing, speech recognition, machine translation, and text classification, Computer Vision, Deep Learning, Various ML,A.I libraries.
                                (NB: Please note that the knowledge of basic python programming is required).
                            </p>

                            
                            <div className='stage-one-duration'>
                            <span>
                                <label>Duration:</label>
                                <p>3 Months</p>
                            </span>

                            <span>
                                <label>Course Fee:</label>
                                <p>100,000</p>
                            </span>

                            <span>
                                <label>Installments: </label>
                                    <p >Yes/40, 000 First Month</p><br/>
                                    <p>30,000 Monthly Afterwards</p>
                            </span>
                            <div className='stage-btn'>
                                <Link to=''>See Outline</Link>
                                <Link to=''>Apply Now</Link>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>

                <div className='web-program-main'>
                    <div className='desktop-program'>
                        <h2>DESKTOP APP PROGRAMMING</h2>
                        <p>Desktop Application Programming is a broad field encompassing a wide range of programming 
                            langauages and frameworks, as well as a wide range of application types, such as games, productivity tools, 
                            and scientific simulations. This is a type of software program that runs on a desktop computer or laptop without the need for internet connection.
                        </p>
                        <p>Our choice of language for desktop programming is python for its ubiquity. Please note that the knowledge of python is a prerequisite for this course. Our goal for this course is to guide students in creating 
                            their own desktop application, testing it, deploying it and maintaining it. To accomplish this, we will learn Tkinter and PyQt.
                        </p>

                    </div>
                </div>

                <div className='web-program-main'>
                    <div className='mobile-program'>
                        <h2>MOBILE APP PROGRAMMING</h2>
                        <p>
                            Mobile development is about creating applications and other software for mobile devices, including tablets and smartphones. At Valuemax, we focus on a hybrid approach to mobile app development, using languages that work cross platform on 
                            both Andriod and IOS devices, as well as been able to host your app on Google Play Store and Apple App Store .
                        </p>
                        <p>
                            Please note that a good knowledge of front-end 
                            web app development is necessary before delving into mobile app development.
                        </p>
                        <p>
                            To accomplish this, students will pick any of the following language of developoment:
                        </p>
                        <p>
                            REACT NATIVE: Creating components, handling state, and using the built-in UI components, Navigation, styling and emulator.
                            IONIC FRAMEWORK: Navigation, styling, Adding native functionality.
                            FLUTTER: dart syntax, layout, widget, and state management.
                        </p>
                    </div>
                </div>
            </Carousel>
        </section>
    </div>
  )
}

export default TrainingDetails

const Carousel = styled(Slider)`
    background-image: url(images/tech.jpg);
    margin-bottom: 100px;
    padding-bottom: 50px;

    ul li button{
        &:before{
            font-size: 10px;
            color: rgb(150, 150, 171);
        }
    }

    li.slick-active button:before{
        color: white;
    }

    .slick-list{
        overflow: hidden;
    }

    button{
        z-index: 1;
    }


    .slick-prev{
        margin-left: 80px;
        margin-top: -250px;

        @media (max-width:600px){
            margin-left: 30px;
        }
    }
    .slick-next{
        margin-right: 130px;
        margin-top: -250px;

        @media (max-width:600px){
            margin-right: 70px;
        }
    }
    .slick-prev::before{
        content: '';
        position : absolute;
        top: -40%;
        width: 1.8rem;
        height: 3px;
        transform: rotate(-45deg);
        background-color: #fff;
        transition: all 0.2s;

        @media (max-width:800px){
            display: none;
        }
    }
    .slick-prev::after {
        content: '';
        top: 50%;
        position : absolute;
        width: 1.8rem;
        height: 3px;
        transform: rotate(45deg);
        background-color: #fff;
        transition: all 0.2s;

        @media (max-width:800px){
            display: none;
        }
}
    .slick-next::before{
        content: '';
        position : absolute;
        top: -40%;
        width: 1.8rem;
        height: 3px;
        transform: rotate(45deg);
        background-color: #fff;
        transition: all 0.2s;

        @media (max-width:800px){
            display: none;
        }
    }

    .slick-next::after {
        content: '';
        top: 50%;
        position : absolute;
        width: 1.8rem;
        height: 3px;
        transform: rotate(-45deg);
        background-color: #fff;
        transition: all 0.2s;

        @media (max-width:800px){
            display: none;
        }
}
`