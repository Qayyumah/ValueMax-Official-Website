import React from 'react'
import styled from 'styled-components'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; 
import { Link } from 'react-router-dom';

const Feedback = () => {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        // autoplay: true,
    }
  return (
    <div>
        <div className='feedbacks'>
            <h3>WHAT OUR CLIENTS SAY</h3>
        </div>
        <Carousel {...settings}>
            <div className='clients-feedback-box'>
                <div className='clients-feedback'>
                    <h1>Rafiu Adeniran Lawal</h1>
                    <p>ValueMax gave us the best user interface and development
                    in a very short time. We have been using them for the past 
                    3 years withou any regret. The team has a very solid
                    knowledge of development technology and communicates with us almost 
                    everytime. The value we get for our money is way too high.</p>
                    <h6>Founder: Building Blocks for Peace Foundation.</h6>
                </div>

                <div className='clients-feedback'>
                    <h1>CE0, Zedz Foods & Beverages Limited.</h1>
                    <p>One of the good things
                        that happened to us at starting up of our company was our relationship with
                        ValueMax. Our website is one of the instruments of content marketing. It gives us
                        the value and image we represent. Best user interface and good development.
                        The standard of our website design align with our vision and value of our company.
                    </p>
                    <h6>Zedz Foods & Beverages Limited</h6>
                </div>

                <div className='clients-feedback'>
                    <h1>Peter Christopher</h1>
                    <p>A place to be is Valuemax.
                    You come empty, you go back fulfilled. They satisfy you than your food with valued
                    service
                    delivery, prompt working crew and superb training packages. I can testify that
                    valuemax is really valuable. </p>
                    <h6><span class="client-designation txt_colo font-weight-bold" style="color:#f2b636;">Senior
                    Pastor; Prayer Life Bible Church </span></h6>
                </div>
            </div>
        </Carousel>
    </div>
  )
}

export default Feedback

const Carousel = styled(Slider)`
    padding: 50px 0px;
    cursor: pointer;

    ul li button{
        &:before{
            visibility: hidden;
        }
    }

    li.slick-active button:before{
        color: white;
        
    }
    button{
        z-index: 1;
    }

    .slick-dots li button{
        border:  2px solid grey;
        border-radius: 50%;
        width: 12px;
        height: 12px;
        z-index: 1;
        font-weight: 400;
        background-color: white;
    }
    .slick-dots li.slick-active button{
        background-color: white;
        border-color: orange;
        color: #fff;
    }
    .slick-dots li button:hover{
        border-color: #f2b636;
    }

.slick-prev{
    margin-left: -60px;

    @media (max-width:600px){
        margin-left: 30px;
    }
}
.slick-next{
    margin-right: -40px;

    @media (max-width:600px){
        margin-right: 70px;
    }
}

.slick-prev::before{
    content: '';
    position : absolute;
    top: -30%;
    width: 1.5rem;
    height: 3px;
    transform: rotate(-45deg);
    background-color: #000;
    transition: all 0.2s;

    @media(max-width: 1024px){
        display: none;
    }
}
.slick-prev::after {
    content: '';
    top: 50%;
    position : absolute;
    width: 1.5rem;
    height: 3px;
    transform: rotate(45deg);
    background-color: #000;
    transition: all 0.2s;
    
    @media(max-width: 1024px){
        display: none;
    }
}
.slick-next::before{
    content: '';
    position : absolute;
    top: -30%;
    width: 1.5rem;
    height: 3px;
    transform: rotate(45deg);
    background-color: #000;
    transition: all 0.2s;

    @media(max-width: 1024px){
        display: none;
    }
}

.slick-next::after {
    content: '';
    top: 50%;
    position : absolute;
    width: 1.5rem;
    height: 3px;
    transform: rotate(-45deg);
    background-color: #000;
    transition: all 0.2s;

    @media(max-width: 1024px){
        display: none;
    }
}
`