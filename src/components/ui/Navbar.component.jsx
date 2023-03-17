import React, {useRef} from 'react'
import { Link } from 'react-router-dom'
import { FaCoins } from 'react-icons/fa';
import './Navbar.css';

export default function Navbarcomponent() {

    const btnToggleRef = useRef();

    const toggleMenue = () => {
        if (window.innerWidth < 992){
            btnToggleRef.current.click();
        }
       
    }
    return (
        <div>

            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <div>
                    <FaCoins className ="Navbar_logo_icon"/>
                        <span className ="Navbar_logo_text"> Crypto Tracking </span>
                        
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" 
                    aria-controls="navbarNav" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation"                    
                    ref = {btnToggleRef}>

                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item" onClick = {toggleMenue}>
                                <Link className="nav-link active" to="/">Home</Link>
                            </li>
                            <li className="nav-item"  onClick = {toggleMenue}>
                                <Link className="nav-link " to="/faq">FAQ</Link>
                            </li>
                            <li className="nav-item"  onClick = {toggleMenue}>
                                <Link className="nav-link " to="/about_uspages">AboutUs</Link>
                            </li>
                            <li className="nav-item"  onClick = {toggleMenue}>
                                <Link className="nav-link " to="/Contact_uspages">ContactUs</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
