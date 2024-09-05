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
                <a className="resume-btn hidden" href={'https://player.onirix.com/projects/9d823a933f3446d2a88338f33a067656/webar?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQyOTExLCJwcm9qZWN0SWQiOjg3NTkwLCJyb2xlIjozLCJpYXQiOjE3MjU0MzIzOTZ9.hlTaF5Jrwxt1qgX02zSISGSBR1DjNRTj-7aQZUcd3cs&background=alpha&preview=false&hide_controls=false&ar_button=false'} >Business Card <HiOutlinePaperClip/></a>
            </div>
        </nav>
    )
}