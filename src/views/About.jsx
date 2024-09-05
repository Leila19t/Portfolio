import React from "react";
import aboutMe from "../assets/images/aboutMe.png"
import aboutMe2 from "../assets/images/aboutMe3.png"
import { HiOutlinePaperClip } from "react-icons/hi";
import { skills } from "../data";
import CV from "../assets/CV.pdf"

export default function About(){

    const skillElements = skills.map((skill,index)=><p key={index} className="skill">{skill}</p>)

    return(
        <div className="about-container" id="about">
             <p>MY BIO</p>
             <h3>About <span className="green">me</span>.</h3>
             <div className="inner-about-container">
                <img src={aboutMe2}/>
                <div className="about-text-btn">
                    <p className="about-text">I am a fresh computer science graduate based out of Damascus, Syria. I am also fresh out of a six-month course dedicated to learn frontend web development, so you might say I'm all coded out! I consider myself a "forever student", because I'm fueled by learning new technologies and solving new problems in whatever shape or form they might come in.</p>
                    <p className="about-text">I also have a website or two that were made on Wordpress. these sites were projects that I have done while I was a foreign exchange student in Poland. I also worked as an IT assistant there for the summer which was very beneficial in terms of learning some new technical concepts. </p>
                    <p className="about-text">Right now, I am focusing on learning and completing as much projects as I can. But I'm always looking for a new challenge. Reach out to me at <a className="email" href="mailto:tarabih.laila@gmail.com?subject=Hello&body=Hello! let's discuss projects." target="_blank">tarabih.laila@gmail.com</a> and let's connect!</p>
                    <a className="resume-btn" href={CV} download="CV.pdf">View resume <HiOutlinePaperClip/></a>
                </div>
             </div>
             <div className="technical-skills-container">
                <div className="technical-intro">
                    <p>SKILLS</p>
                    <h3>Technical <span className="green">skills</span>.</h3>
                    <p className="about-text">I have completed multiple projects for varoius platforms including Android, Web and desktop applications. all of which were coded in multiple platforms including React, Flutter, and multiple languages like Python, JavaScript, and C#. </p>
                </div>
                <div className="skills">{skillElements}</div>
             </div>
        </div>
    )
}