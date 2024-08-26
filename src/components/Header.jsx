import React from 'react'
import { useState } from 'react'
import { Fade } from 'react-reveal'
import '../Assets/header.css'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'
import styled from 'styled-components'
import { Link } from 'react-router-dom'


const Header = () => {
    const [burgerStatus, setBurgerStatus] = useState(false)

  return (
    <div className='header-container'>
        <div className='header'>
            <div className='logo'>
                <img src='images/logo44.png' alt='logo'/>
            </div>
            <div className='links'>
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
                    <Fade top>
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
                    </Fade>
                </BurgerNav>
            </div>
        </div>


        <div className='header-section'>
            <div className='slider'>
                
            </div>
        </div>
    </div>
  )
}

export default Header

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
    z-index: 1;
    opacity: 1;
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