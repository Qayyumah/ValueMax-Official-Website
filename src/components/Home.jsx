import React from 'react'
import { useState } from 'react'
import '../Assets/home.css'
import styled from 'styled-components'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; 
import { ReactTyped } from "react-typed";
import { Link } from 'react-router-dom'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'
import Portfolio from './Portfolio'

const Home = () => {
    const [burgerStatus, setBurgerStatus] = useState(false)
    let settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    }
  return (
    <div>
        <div className='container'>
            <div className='head'>
                <div className='header-logo'>
                    <img src='images/logo44.png' alt='logo'/>
                </div>
                <div className='header-link'>
                    <Link to='/'>Home</Link>
                    <Link to='/about'>About us</Link>
                    <Link to='/tech-academy'>Tech Academy</Link>
                    <Link to='/innovation-hub'>innovation Hub</Link>
                    <Link to='/branding'>Branding & Advert</Link>
                    <Link to='/hosting'>Hosting</Link>
                    <Link to='/blog'>Blog</Link>
                    <Link to='/contact'>Contact</Link>
                </div>

                <div className='burger-nav'>
                    <RightMenu>
                        <CustomMenu onClick={()=>setBurgerStatus(true)}/>
                    </RightMenu>
                    <BurgerNav show={burgerStatus}>
                        <CloseWrapper>
                            <div className='logo-box'>
                                <div className='img-logo'>
                                    <img src='images/logo43.png'/>
                                </div>
                                <Link to='/'>Value<span style={{color:'#f8ae10'}}>Max</span></Link>
                            </div>
                            <CustomClose onClick={()=>setBurgerStatus(false)}/>
                        </CloseWrapper>
                        <Nav>
                            <Link to='/'>Home</Link>
                            <Link to='/about'>About us</Link>
                            <Link to='/tech-academy'>Tech Academy</Link>
                            <Link to='/innovation-hub'>innovation Hub</Link>
                            <Link to='/branding'>Branding & Advert</Link>
                            <Link to='/hosting'>Hosting</Link>
                            <Link to='/blog'>Blog</Link>
                            <Link to='/contact'>Contact</Link>
                        </Nav>
                    </BurgerNav>
                </div>
            </div>
            <Carousel {...settings}>
                
                <div className='image1' >
                    <div style={{
                        backgroundImage:'url(/images/h.jpg)',
                        backgroundSize: 'cover',
                        backgroundPosition:'center center',
                        margin:'0',
                        height:'750px',
                        backgroundRepeat:'no-repeat',
                    }}>
                    <div className='texts'>
                        <h2>Welcome to Valuemax</h2>
                        <button><Link to='/about'>About Us</Link></button>
                    </div>
                        
                    </div>
                </div>
                <div  className='image2'>
                <div style={{
                    backgroundImage:'url(/images/tech.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition:'center center',
                    margin:'0',
                    height:'750px',
                    backgroundRepeat:'no-repeat',
                    transform: 'matrix(1, 0, 0, 1, 0, 0)'
                }}>
                    <div className='text2'>
                        <h2>Let's Handle Your </h2>
                        <p>Web/Mobile App Development</p>
                        <button><Link to='/contact'>Contact Us</Link></button>
                    </div>
                </div>
                </div>
                <div  className='image3'>
                    <div style={{
                        backgroundImage:'url(/images/pro.jpg)',
                        backgroundSize: 'cover',
                        backgroundPosition:'center center',
                        height:'750px',
                        margin:'0',
                        backgroundRepeat:'no-repeat',
                        transform: 'translate3d(0px, 0px, 0px)'
                    }}>
                        <div className='text3'>
                            <p>Build career as programmer?</p>
                            <h2>Learn With Us</h2>
                            <button><Link to="/contact">Enroll Now!</Link></button>
                        </div>
                    </div>
                </div>
            </Carousel>
            
            <div className='offer'>
                <h3>Valuemax Communication provides{" "} 
                    <ReactTyped style={{color:'rgb(242, 182, 54)'}} strings={[
                        'Web Application development',
                        'Mobile App Development',
                        'E-commerce System',
                        'Website Hosting and Domain',
                        'Digital Marketing & Branding',
                        'Training & Consultancy Services',
                        'After Training Job Placement',
                        'Graphics Design Services',
                        'Digital Prints',
                        'Online Services'
                    ]} typeSpeed={100} loop backSpeed={10} />
                </h3>
            </div>

            <div className='About'>
                <div className='about-text'>
                    <h1>Welcome to ValueMax Communications</h1>
                    <p>Valuemax is a fast growing Software development company with special
                    interest in providing solutions that specific local ICT needs in Nigeria 
                    and Africa continent by extension. Currently we focus on web application
                    development, business/organization website design, mobile App development, 
                    Training and human Resource Development</p>
                    <p>With more than a decade experience in the industry, we provide cutting edge/mobile technology
                    services at most competitive price in the market.</p>
                    <div className='btns'>
                        <Link to='/about'>More about us</Link>   
                    </div>         
                </div>
                <div className='about-image'>
                    <img src='images/about1.png' alt=''/>
                </div>
            </div> 
            
        
            <div className='Services'>
                    <h3>What We Do</h3>
                <div className='services-grid'>
                    <div className='box'>
                        <img src='images/webmobile.png'/>
                        <h6>Innovation Hub</h6>
                        <p>
                            Whether you need a simple static 
                            business website or a massive customized 
                            web application/portal/e-commerce system/business mobile app, Valuemax is here to give you the best at pocket friendly price.
                        </p>
                    </div>
                    <div className='box'>
                        <img src='images/domain.png'/>
                        <h6>Domain & Hosting</h6>
                        <p>
                            As web agency, we believe nothing 
                            but blazing fast-loading website, blog, 
                            and web application. And that is exact 
                            experience we promise you when 
                            you host with us at Valuemax.
                        </p>
                    </div>
                    <div className='box'>
                        <img src='images/marketing2.png'/>
                        <h6>Data Management</h6>
                        <p> 
                            we exercise a unique online
                            marketing strategy that provide innovative, 
                            creative solutions for emerging brands 
                            and well-established companies. We specialize in helping both business-to-consumer and 
                            business-to-business clients gain attention.
                        </p>
                    </div>
                    <div className='box'>
                        <img src='images/placement.png'/>
                        <h6>Tech Academy</h6>
                        <p>
                            Get 100% practical experience! 
                            we offer training that is personalized 
                            to suit your learning style, valuemax is 
                            here to suggests the best course
                            which suits & promotes your career.
                        </p>
                    </div>
                    <div className='box'>
                        <img src='images/Branding.png'/>
                        <h6>Branding & Advertisement</h6>
                        <p>
                            We offer a complete collection of 
                            graphic design services to showcase 
                            your identity. Working with our talented
                            designers who ably translate your thoughts and ideas 
                            into creative graphic designs.
                        </p>
                    </div>
                    <div className='box'>
                        <img src='images/online.png'/>
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
                <div className='btn'>
                    <Link to="/contact">Get A Quote</Link>
                </div>
            </div>

            <div className='how'>
                <h3>How We Do It</h3>
                <div className='how-grid'>
                    <div className='boxs'>
                        <img src='images/Discuss.png'/>
                        <h6>Discuss your Idea with us</h6>
                        <p>
                            Give us a clear explanation (with all functional details) of what you want your app/website to look like. 
                            This is a critical project-initiation stage that must be thoroughly worked by both the client (you) and members of our team
                        </p>
                    </div>

                    <div className='boxs'>
                        <img src='images/download.svg'/>
                        <h6>Proposal Presentation</h6>
                        <p>
                            Based on the explanation received, our team brainstorm on the best technology that will get the job done, the approach to adopt, draw a wireframe, 
                            the cost implication and the time frame for deliverable(s). All these are documented
                        </p>
                    </div>

                    <div className='boxs'>
                        <img src='images/Project.png'/>
                        <h6>Project Execution</h6>
                        <p>
                            At this stage, our team build /implement, deploy / install and thoroughly test alongside the client and effect necessary corrections 
                            based on the initial agreement. corrections based on the initial agreement. corrections based
                        </p>
                    </div>

                    <div className='boxs'>
                        <img src='images/monitoring.png'/>
                        <h6>Monitoring and Correction</h6>
                        <p>
                            At valuemax, We offer 6months after development monitoring service (within the ambit of the detail in MOU) at no cost whatsoever to our client to 
                            ensure the system is stable, servicing its purpose and optima system performance.
                        </p>
                    </div>
                </div>
                <div className='manage'>
                    <img src=''/>
                    <h2>Website Management</h2>
                    <p>
                    When it comes to web management, we offer a flexible package. 
                    The client can be trained to manage the website in-house on their own or the management can be contracted to us as an agency at a pocket friendly amount. In both instance, we give you eery support you need all the way to make sure your web or app is functioning optimally and serving 
                    the purpose to which it was developed in the first place.
                    </p>
                </div>
            </div>

            <div className='mission-vision'>
                <div className='mission'>
                    <h4>OUR MISSION</h4>
                    <h1>ValueMax Communications</h1>
                    <p> Our mission is to provide customers most 
                        efficient one-stop local digital solutions services, delivering satisfactory services 
                        that does not compromise the standard.
                    </p>
                </div>
                <div className='vision'>
                    <h4>OUR VISION</h4>
                    <h1>What drives us</h1>
                    <p>
                        We strive to deliver satisfactory services 
                        that make every of our customer end up being our friends.
                    </p>
                </div>
            </div>

            <div className='why'>
            <h3>WHY VALUEMAX</h3>
                <div className='why-grid'>
                    <div className='box-column'>
                        <img src=''/>
                        <h6>Professionalism</h6>
                        <p>
                            Not only are we professionals, we make sure we relate and respect our clients irrespective of their status, we treat every customer as a family, 
                            everyone is important and a key part of the company.
                        </p>
                    </div>
                    <div className='box-column'>
                        <img src=''/>
                        <h6>Customer's Oriented</h6>
                        <p>
                            We are dedicated to providing our clients with the quality of service that they deserve. We listen to our clients’ needs, and in return develop ethical, 
                            smart and tailored solutions that fulfil their long-term goals.
                        </p>
                    </div>
                    <div className='box-column'>
                        <img src=''/>
                        <h6>Experience</h6>
                        <p>
                            Our team of specialists is something 
                            that makes us extremely proud and self-confident; our approach is collaborative, 
                            scientific and customized to meet customers satisfaction
                        </p>
                    </div>
                </div>
                <div className='contact-btn'>
                    <Link to="/contact">Contact Us</Link>
                </div>
            </div>
            
            <div className='our-products'>
                <h3>OUR PRODUCT</h3>
                    <div className='products-grid'>
                        <div className='product-box'>
                            <img src='images/download (1).svg'/>
                            <h6>Cheap Data, VTU & Online Payment</h6>
                            <p style={{color:'grey'}}>It is called SME data plan. It is presently available on MTN, GLO,AIRTEL,9MOBILE AND SMILE network</p>
                            <p>The idea behind it is that, we buy cheaper when buying in bulk. 
                                With SME tarrif plan , we are able to share/resell in smaller bit to end users. 
                                This makes the dataplan incredibly cheaper than conventional data plan.it works on any 
                                device 24/7 and very reliable <Link to='/'>Read More...</Link>
                            </p>
                        </div>

                        <div className='product-box'>
                            <img src='images/download (2).svg'/>
                            <h6>Membership Management System</h6>
                            <p>
                                Valuemax Membership Management Portal is a cloud-based 
                                application to help organization manages her members efficiently. 
                                Some of its features include:
                            </p>
                            <p>
                                Members database creation, view and editing
                                Bulk member creation
                                Members small groups and departments
                                sms or email notification/reminder 
                                to all members or sub-group <Link to='/'>Read More...</Link> 
                            </p>
                        </div>

                        <div className='product-box'>
                            <img src='images/download (3).svg'/>
                            <h6>Domain Hosting</h6>
                            <p>As software development company, Valuemax 
                            always look for ways to make life easier for her clients. This made us to embark on automating the data plan so you can recharge yourself, friends and family member and even resell and make little change out of it. We implement this alongside cable TV subscription, Recharge Card Purchase and 
                            PHCN bill payment. With a single wallet on Valuemax, <Link to='/'>Read More...</Link> </p>
                        </div>
                    </div>
                <div className='products-btn'>
                    <Link to='/'>Contact Us</Link>
                </div>
            </div>
            
            <Portfolio/>
        </div>
    </div>
  )
}

export default Home

const RightMenu = styled.div`
    display: flex;
    /* align-items: center; */
    justify-content: flex-end;

`

const CustomMenu = styled(MenuIcon)`
    cursor: pointer;
    color: #fff;
`
const BurgerNav = styled.div`
    position: fixed;
    top:0;
    bottom: 0;
    right: 0;
    background-color: #182141;
    width: 100%;
    list-style: none;
    padding: 0 0px;
    display: flex;
    flex-direction: column;
    text-align: start;
    transform: ${props => props.show ? 'translateX(0)' : 'translateX(-100%)'};
    /* transition: transform cubic-bezier(0.175, 0.885, 0.32, 1.275); */
    transition: all .3s;

        
`
const Nav = styled.div`
    display: flex;
    flex-direction: column;
    margin: 20px 30px;

    a{
        font-size: 18px;
        font-weight: 400;
        padding: 12px 0;
        border-bottom: 1px solid rgba(255, 255, 255, .2);
        color: #f2f2f2;
        margin: 0px 0;
        text-transform: capitalize;
        text-decoration-line: none !important;

        &:last-child{
            border-bottom: none;
        }
    }
    
`
const CustomClose = styled(CloseIcon)`
    cursor: pointer;   
    font-size: 30px;
`
const CloseWrapper = styled.div`
     display: flex;
     flex-direction: row;
     align-items: center;
     justify-content: space-between;
     padding: 25px 45px;
     color: #fff;
    
`

const Carousel = styled(Slider)`

    ul li button{
        &:before{
            font-size: 10px;
            color: rgb(150, 150, 171);
        }
    }

    li.slick-active button:before{
        color: white;
    }
    button{
        z-index: 1;
    }
    .slick-prev{
        margin-left: 80px;

        @media (max-width:600px){
            margin-left: 30px;
        }
    }
    .slick-next{
        margin-right: 130px;

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
}
`