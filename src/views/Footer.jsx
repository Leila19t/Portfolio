import React from "react";
import { HashLink } from "react-router-hash-link";
import { PiGithubLogoFill } from "react-icons/pi"
import { FaLinkedinIn } from "react-icons/fa"
import { BiLogoGmail } from "react-icons/bi"
import { AiFillInstagram } from "react-icons/ai"

export default function Footer() {
    return (
        <div className="footer-container">
            <div className="inner-footer-container">
                <h3>laila19t<span className="green">.</span></h3>
                <div className="footer-info">
                    <div className="titles">
                        <p>Web Developer</p>
                        <p>Frontend Developer</p>
                    </div>
                    <div className="vertical-line"></div>
                    <div className="inside-links">
                    <HashLink to='#home' smooth>
                    Home
                </HashLink>
                <HashLink to='#projects' smooth>
                    Projects
                </HashLink>
                <HashLink to='#about' smooth>
                    About me
                </HashLink>
                <HashLink to='#contact' smooth>
                    Contact me
                </HashLink>
                    </div>
                    <div className="vertical-line"></div>
                    <div className="outside-links-container">
                        <p>Social Media Handlers</p>
                        <div className="outside-links">
                            <a href="https://github.com/laila19t" target="_blank"><PiGithubLogoFill/></a>
                            <a href="https://www.linkedin.com/in/laila-tarabih-4573709a/" target="_blank"><FaLinkedinIn/></a>
                            <a href="mailto:tarabih.laila@gmail.com?subject=Hello&body=Hello! let's discuss projects." target="_blank"><BiLogoGmail/></a>
                            <a href="https://www.instagram.com/laila19t/" target="_blank"><AiFillInstagram/></a>
                        </div>
                    </div>
                </div>
            </div>
            <p>Developed by me, Designed by <span className="green">Peace Anyanwu</span></p>
        </div>
    )
}