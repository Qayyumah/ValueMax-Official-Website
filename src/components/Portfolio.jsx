import React from 'react'
import '../Assets/portfolio.css'
import styled from 'styled-components'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; 
import { Link } from 'react-router-dom';
import  Fade  from 'react-reveal/Fade';

const Portfolio = () => {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        // autoplay: true,

        responsive:[
            {
                breakpoint: 1200,
                settings:{
                    slidesToShow: 4,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 1024,
                settings:{
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 768,
                settings:{
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 480,
                settings:{
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    imageWidth: 8000,
                },
            }
        ]
    }

  return (
    <div className='portfolio'>
        <div className='port-head'>
            <h3>Portfolio</h3>
            <p>Below are some of the jobs portfolio in the recent time:</p>
        </div>
        <Carousel {...settings}>
            <div className='site1' >
                <div style={{
                    backgroundImage:'url(/images/covmind.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition:'center center',
                    margin:'0',
                    height:'300px',
                    backgroundRepeat:'no-repeat',
                }}>
                    <div className='port-links'>
                        <Fade top>
                            <h3>COVMIND INTERNATIONAL EDUCATION</h3>
                        </Fade>
                        <Fade bottom>
                        <Link to='https://covmind.com/'>Www.Covmind.Com</Link>
                        </Fade>
                    </div>
                </div>
            </div>

            <div className='site1'>
                <div style={{
                    backgroundImage:'url(/images/opera1.png)',
                    backgroundSize: 'cover',
                    backgroundPosition:'center center',
                    margin:'0',
                    height:'300px',
                    backgroundRepeat:'no-repeat',
                }}>
                    <div className='port-links'>
                        <h3>OPERANIYI FX COPY</h3>
                        <Link to='/www.Covmind.Com'>Www.Operaniyifxcopy.Com</Link>
                    </div>
                </div>
            </div>

            <div className='site1'>
                <div style={{
                    backgroundImage:'url(/images/olakem1.png)',
                    backgroundSize: 'cover',
                    backgroundPosition:'center center',
                    margin:'0',
                    height:'300px',
                    backgroundRepeat:'no-repeat',
                }}>
                    <div className='port-links'>
                        <h3>OLAKEM VENTURES</h3>
                        <Link to=''>Www.Olakemventures.Com</Link>
                    </div>
                </div>
            </div>

            <div className='site1'>
                <div style={{
                    backgroundImage:'url(/images/bbPeace.png)',
                    backgroundSize: 'cover',
                    backgroundPosition:'center center',
                    margin:'0',
                    height:'300px',
                    backgroundRepeat:'no-repeat',
                }}>
                    <div className='port-links'>
                        <h3>BBFORPEACE</h3>
                        <Link to=''>Www.Bbforpeace.Org</Link>
                    </div>
                </div>
            </div>

            <div className='site1'>
                <div style={{
                    backgroundImage:'url(/images/zedz.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition:'center center',
                    margin:'0',
                    height:'300px',
                    backgroundRepeat:'no-repeat',
                }}>
                    <div className='port-links'>
                        <h3>ZEDZFOODS</h3>
                        <Link to=''>Www.Zedzfoods.Com</Link>
                    </div>
                </div>
            </div>

            <div className='site1'>
                <div style={{
                    backgroundImage:'url(/images/ayogif.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition:'center center',
                    margin:'0',
                    height:'300px',
                    backgroundRepeat:'no-repeat',
                }}>
                    <div className='port-links'>
                        <h3>AYOGIF</h3>
                        <Link to=''>Www.Ayogif.Com</Link>
                    </div>
                </div>
            </div>

            <div className='site1'>
                <div style={{
                    backgroundImage:'url(/images/understand.png)',
                    backgroundSize: 'cover',
                    backgroundPosition:'center center',
                    margin:'0',
                    height:'300px',
                    backgroundRepeat:'no-repeat',
                }}>
                    <div className='port-links'>
                        <h3>UNDERSTAND BUSINESS</h3>
                        <Link to=''>Wwww.Understandbusiness.Com</Link>
                    </div>
                </div>
            </div>

            <div className='site1'>
                <div style={{
                    backgroundImage:'url(/images/AgricMatters.png)',
                    backgroundSize: 'cover',
                    backgroundPosition:'center center',
                    margin:'0',
                    height:'300px',
                    backgroundRepeat:'no-repeat',
                }}>
                    <div className='port-links'>
                        <h3>AGRIC MATTERS</h3>
                        <Link to=''>Www.Agricmatters.Com</Link>
                    </div>
                </div>
            </div>

            <div className='site1'>
                <div style={{
                    backgroundImage:'url(/images/Timeshoppy.png)',
                    backgroundSize: 'cover',
                    backgroundPosition:'center center',
                    margin:'0',
                    height:'300px',
                    backgroundRepeat:'no-repeat',
                }}>
                    <div className='port-links'>
                        <h3>TIMESHOPPY</h3>
                        <Link to=''>Www.Timeshoppy.Com</Link>
                    </div>
                </div>
            </div>

            <div className='site1'>
                <div style={{
                    backgroundImage:'url(/images/JetMall.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition:'center center',
                    margin:'0',
                    height:'300px',
                    backgroundRepeat:'no-repeat',
                }}>
                    <div className='port-links'>
                        <h3>JET MALL</h3>
                        <Link to=''>Www.Jetmsllng.Com</Link>
                    </div>
                </div>
            </div>
        </Carousel>
    </div>
  )
}

export default Portfolio

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

    /* @media (max-width:600px){
        margin-left: 30px;
    } */
}
.slick-next{
    margin-right: -40px;

    /* @media (max-width:600px){
        margin-right: 70px;
    } */
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