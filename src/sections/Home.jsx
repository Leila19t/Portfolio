import React from "react";
import { PiGithubLogoFill } from "react-icons/pi"
import { FaLinkedinIn, FaGraduationCap, FaGlobeEurope } from "react-icons/fa"
import { BiLogoGmail } from "react-icons/bi"
import { AiFillInstagram } from "react-icons/ai"
import { SiScrimba } from "react-icons/si"
import CertificateCard from "../components/CertificateCard";



export default function Home() {

    const certificates = [
        {
            icon: <FaGraduationCap />,
            title: "Bachelor in Software Engineering",
            content: "lorem ipsum fhfu sloif uhe iuhknla iuyhw lihwa kuyw cdlo9s kiwhdb liowdb lawobc akujkbf ausgba khabf, ajhvfa ajhvf lhiaf kugrf kiy w aufb v ufff."
        },
        {
            icon: <FaGlobeEurope />,
            title: "Erasmus+ student exchange certificate",
            content: "ss"
        },
        {
            icon: <SiScrimba />,
            title: "'Frontend career path' certificate",
            content: "ss"
        }
    ]

    return (
        <div>
            <div className="home-container" id="home">
                <h1>Hi, I am Laila Tarabih</h1>
                <h3>A fresh <span className="green">frontend developer</span> transforming ideas into stunning digital experiences. Let's create something amazing!</h3>
                <div className="social-buttons">
                    <a href="#"><PiGithubLogoFill /></a>
                    <a href="#"><BiLogoGmail /></a>
                    <a href="#"><FaLinkedinIn /></a>
                    <a href="#"><AiFillInstagram /></a>
                </div>
            </div>
            <div className="certificates">
                <CertificateCard icon={<FaGraduationCap/>} 
                                 title={"Bachelor in software engineering"}
                                 content={""}
                                 />
            </div>
        </div>

    )
}