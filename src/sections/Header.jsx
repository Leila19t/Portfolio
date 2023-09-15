import React from "react";
import { HashLink } from "react-router-hash-link";
import { HiOutlinePaperClip } from "react-icons/hi";

export default function Header() {
    return (
        <nav>
            <h3>laila19t<span className="green">.</span></h3>
            <div className="nav-links">
                <HashLink to=''>
                    Home
                </HashLink>
                <HashLink to=''>
                    About me
                </HashLink>
                <HashLink to='#projects'>
                    Projects
                </HashLink>
                <HashLink to=''>
                    Contact me
                </HashLink>
                <button className="resume-btn">View resume <HiOutlinePaperClip/></button>
            </div>
        </nav>
    )
}