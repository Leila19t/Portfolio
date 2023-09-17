import React from "react";
import { HashLink } from "react-router-hash-link";
import { HiOutlinePaperClip } from "react-icons/hi";

export default function Header() {
    return (
        <nav>
            <h3>laila19t<span className="green">.</span></h3>
            <div className="nav-links">
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
                <button className="resume-btn hidden">View resume <HiOutlinePaperClip/></button>
            </div>
        </nav>
    )
}