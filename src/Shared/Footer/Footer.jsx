import React from 'react';
import logo from "../../assets/logo.png";
import './Footer.css';

const Footer = () => {
    return (
        <div id='footer-section'>
            <div id='section-item'>
                <div id='side-1'>
                    <div className="d-flex align-items-center justify-content-center gap-2">
                        <img style={{ width: "20px" }} src={logo} alt="" />
                        <h5 className="text-light fs-4 mb-0">Canvix</h5>
                    </div>
                    <p>We’re a team of strategic creator and digital innovator, united focus in our pursuit of mastery and joyful.</p>
                </div>
                <div id='side-2'>
                    <p>Pages</p>
                    <p id='side2T'>Home</p>
                    <p id='side2T'>About</p>
                    <p id='side2T'>Contact Us</p>
                </div>
                <div>
                    <p>Subscribe</p>
                    <div className='side3-div'>
                        <input type="text" placeholder='Enter your mail here' />
                        <button>Subscribe</button>
                    </div>
                </div>
            </div>
            <br />
            <br />
            <hr />
        </div>
    );
}

export default Footer;
