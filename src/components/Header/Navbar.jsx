import React from 'react'
import Logo from "../../../src/images/Geeco Logo.webp"
import "./Navbar.css"
import { IoIosCall,IoIosMail } from "react-icons/io";

export const Navbar = () => {
  return (
    <section className="container-fluid Navbar">
        <div className="section__Navbar">
            <div className="Navbar__container col-2">
                <img src={Logo} alt="" className='logo__image'/>
            </div>
            <div className="Navbar__container col-10">
                <div className="Navbar__Allmenu">
                    <a href="" className="Navbar__menu">Home</a>
                    <a href="" className="Navbar__menu">About Us</a>
                    <a href="" className="Navbar__menu">All Pumps</a>
                    <a href="" className="Navbar__menu">Pump Selection Tool</a>
                    <a href="" className="Navbar__menu text__menu__red">Warranty Registration</a>
                </div>
                <div className="Navbar__contacts col-4">
                    <a href="" className="Navbar__contactdetails"><IoIosCall />9876541230</a>
                    <a href="" className="Navbar__contactdetails"><IoIosMail />geecopumps@gmail.com</a>
                </div>
            </div>
        </div>
    </section>
  )
}
