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
            icon: <FaGraduationCap className="cert-icon"/>,
            title: "Bachelor in Software Engineering",
            content: "With a full scholarship, I graduated in February 2023 with a 3.1/4 GPA, after completing five years of college",
            num: "01"
        },
        {
            icon: <FaGlobeEurope className="cert-icon"/>,
            title: "Erasmus+ student exchange certificate",
            content: "In February 2020, I enrolled in the Erasmus+ student exchange program to study for a semester in Poland.",
            num: "02"
        },
        {
            icon: <SiScrimba className="cert-icon"/>,
            title: "'Frontend career path' certificate",
            content: "by September 2023, I completed a six-month online course on the Scrimba platorm to learn and excell in web development",
            num: "03"
        }
    ]

    const certificateElements = certificates.map(cer => <CertificateCard icon={cer.icon} title={cer.title} content={cer.content} num={cer.num}/>)

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
            <div className="certificates-container">
                <p>ACADEMICS</p>
                <h3>What <span className="green">I've done</span>.</h3>
                <div className="certificates">
                    {certificateElements}
                </div>
            </div>

        </div>

    )
}