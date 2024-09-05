import React from "react";
import { PiGithubLogoFill } from "react-icons/pi"
import { FaLinkedinIn } from "react-icons/fa"
import { BiLogoGmail } from "react-icons/bi"
import { AiFillInstagram } from "react-icons/ai"
import CertificateCard from "../components/CertificateCard";
import { certificates } from "../data";


export default function Home() {

    const certificateElements = certificates.map((cer,index) => <CertificateCard key={index} icon={cer.icon} title={cer.title} content={cer.content} num={cer.num}/>)

    return (
        <div id="home">
            <div className="home-container" id="home">
                <h1>Hi, I am Laila Tarabih</h1>
                <h3>A fresh <span className="green">frontend developer</span> transforming ideas into stunning digital experiences. Let's create something amazing!</h3>
                <div className="social-buttons">
                    <a href="https://github.com/laila19t" target="_blank"><PiGithubLogoFill /></a>
                    <a href="mailto:tarabih.laila@gmail.com?subject=Hello&body=Hello! let's discuss projects." target="_blank"><BiLogoGmail /></a>
                    <a href="https://www.linkedin.com/in/laila-tarabih-4573709a/" target="_blank"><FaLinkedinIn /></a>
                    <a href="https://www.instagram.com/laila19t/" target="_blank"><AiFillInstagram /></a>
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