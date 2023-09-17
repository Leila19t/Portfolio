import React from "react";
import aboutMe from "../assets/images/aboutMe.png"
import { HiOutlinePaperClip } from "react-icons/hi";
import { skills } from "../data";

export default function About(){

    const skillElements = skills.map(skill=><p className="skill">{skill}</p>)

    return(
        <div className="about-container">
             <p>MY BIO</p>
             <h3>About <span className="green">me</span>.</h3>
             <div className="inner-about-container">
                <img src={aboutMe}/>
                <div className="about-text-btn">
                    <p className="about-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus in massa tempor nec feugiat nisl pretium fusce. Tincidunt eget nullam non nisi est sit amet. Pulvinar mattis nunc sed blandit libero volutpat sed. Condimentum id venenatis a condimentum vitae.</p>
                    <p className="about-text">Tortor posuere ac ut consequat semper viverra nam libero. Nulla malesuada pellentesque elit eget gravida cum. Eget nullam non nisi est sit amet. Enim tortor at auctor urna nunc. Nulla malesuada pellentesque elit eget gravida cum sociis natoque.</p>
                    <p className="about-text">Non enim praesent elementum facilisis leo. Fusce ut placerat orci nulla pellentesque dignissim enim. Sagittis eu volutpat odio facilisis mauris. Arcu non sodales neque sodales. Senectus et netus et malesuada fames ac turpis egestas maecenas. Non odio euismod lacinia at quis risus sed vulputate odio.</p>
                    <button className="resume-btn">View resume <HiOutlinePaperClip/></button>
                </div>
             </div>
             <div className="technical-skills-container">
                <div className="technical-intro">
                    <p>SKILLS</p>
                    <h3>Technical <span className="green">skills</span>.</h3>
                    <p className="about-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus in massa tempor nec feugiat nisl pretium fusce. Tincidunt eget nullam non nisi est sit amet. Pulvinar mattis nunc sed blandit libero volutpat sed. Condimentum id venenatis a condimentum vitae.</p>
                </div>
                <div className="skills">{skillElements}</div>
             </div>
        </div>
    )
}