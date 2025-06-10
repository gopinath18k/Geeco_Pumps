import React, { useState } from 'react'
import Logo from "../../../src/images/Geeco Logo.webp"
import "./Navbar.css"
import { IoIosCall,IoIosMail } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from 'react-router-dom';

export const Navbar = () => {

    const [menuopen,setMenuopen]=useState(false);

    const handleClickMenu=()=>{
        setMenuopen(!menuopen)
    }
    const closeMenu=()=>{
        setMenuopen(!false)
    }

  return (
    <section className="Navbar">
        <div className="section__Navbar">
            <div className="Navbar__container col-6 col-sm-6 col-md-6 col-lg-2">
                <img src={Logo} alt="" className='logo__image'/>
            </div>
            <div onClick={handleClickMenu} className="Navbar__Mobile col-6 col-sm-6">
                {menuopen?<IoCloseOutline className='Nav__Mobile__Icons'/>:<RxHamburgerMenu className='Nav__Mobile__Icons'/>}
                
                
            </div>
            <div className="Navbar__container Nav_Menus col-10 col-lg-10">
                <div className="Navbar__Allmenu">
                    <Link to="/" className="Nav_Home"><a href="" className="Navbar__menu">Home</a></Link>
                    <Link to="/about-us" className="Nav_About_Us"><a href="" className="Navbar__menu">About Us</a></Link>
                    <Link to="/all-pumps" className="Nav_All_Pumps"><a href="" className="Navbar__menu">All Pumps</a></Link>
                    <Link to="/pump-selection-tool" className="Nav_Pump_Selection_Tool"><a href="" className="Navbar__menu">Pump Selection Tool</a></Link>
                    <Link to="/warranty-registration" className="Nav_Warranty_Registration"><a href="" className="Navbar__menu text__menu__red">Warranty Registration</a></Link>
                </div>    
                <div className="Navbar__contacts col-4">
                    <div className="Navbar_contactdetails">
                        <IoIosCall className='Navbar_callIcon'/>
                        <a href="" className="Navbar__contactNumberdetails">9876541230</a>
                    </div>
                    <div className="Navbar_contactdetails">
                        <IoIosMail className='Navbar_MailIcon'/>
                       <a href="" className="Navbar__contactMaildetails">geecopumps@gmail.com</a>
                    </div>
                </div>
            </div>
        </div>
        <div className={menuopen ? "Navbar__MobileMenu active":"Navbar__MobileMenu"}>
            <div className="Navbar__AllMobilemenu">
                    <Link to="/" className="Nav_Mobile_Home">Home</Link>
                    <Link to="/about-us" className="Nav_Mobile_About_Us">About Us</Link>
                    <Link to="/all-pumps" className="Nav_Mobile_Pumps">All Pumps</Link>
                    <Link to="/pump-selection-tool" className="Nav_Mobile_Pump_Selection_Tool">Pump Selection Tool</Link>
                    <Link to="/warranty-registration" className="Nav_Mobile_Warranty_Registration">Warranty Registration</Link>
                </div>
        </div>
    </section>
  )
}
