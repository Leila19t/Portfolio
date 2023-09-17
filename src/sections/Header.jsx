import React from "react";
import { HashLink } from "react-router-hash-link";
import { HiOutlinePaperClip } from "react-icons/hi";
import CV from "../assets/CV.pdf"


export default function Header() {
    return (
        <nav>
            <h3>laila19t<span className="green">.</span></h3>
            <div className="nav-links">
                <HashLink to='#home' smooth className="link">
                    Home
                </HashLink>
                <HashLink to='#projects' smooth className="link">
                    Projects
                </HashLink>
                <HashLink to='#about' smooth className="link">
                    About me
                </HashLink>
                <HashLink to='#contact' smooth className="link">
                    Contact me
                </HashLink>
                <a className="resume-btn hidden" href={CV} download="CV.pdf">View resume <HiOutlinePaperClip/></a>
            </div>
        </nav>
    )
}