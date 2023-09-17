import React, {useState} from "react";
import {BsTelephone} from "react-icons/bs"
import {MdOutlineMailOutline} from "react-icons/md"
import {GrLocation} from "react-icons/gr"
import { pushMessage } from "../firebase";


export default function Contact(){
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        message: ""
    })

    function handleChange(e){
        const {name,value}=e.target
        setFormData(prevFormData => {
            return {  ...prevFormData,
                     [name]: value}
        })
        
    }

    function handleSubmit(e){
        e.preventDefault()
        console.log(formData)
       pushMessage(formData)
    }

    return(
        <div className="shape" id="contact">
            <div className="contact-container">
             <p>GET IN TOUCH</p>
             <h3>Contact <span className="green">me</span>.</h3>
             <h4 className="about-text">I am currently open to full-time, contract, or part-time opportunities in Front End Development.</h4>
             <div className="contact-form">
                <div className="contact-form-left">
                    <h3 className="discuss-upper">Have an awesome project idea?</h3>
                    <h3 className="discuss">Let's Discuss.</h3>
                    <div className="personal-info">
                        <span className="info-icon"><BsTelephone/></span>
                        <p >+963 989 444 102</p>
                    </div>
                    <div className="personal-info">
                        <span className="info-icon"><MdOutlineMailOutline/></span>
                        <p>tarabih.laila@gmail.com</p>
                    </div>
                    <div className="personal-info">
                       <span className="info-icon"><GrLocation/></span> 
                        <p className="white">Damascus, Syria</p>
                    </div>
                </div>
                <div >
                    <form className="contact-form-right" onSubmit={handleSubmit}>
                        <label for="fullName">Full name</label>
                        <input type="text" placeholder="Enter name" id="fullName" name="fullName" onChange={handleChange} required/>
                        <label for="email">Email address</label>
                        <input type="email" placeholder="Enter email" id="email" name="email" onChange={handleChange} required/>
                        <label for="message">Message</label>
                        <textarea placeholder="Enter message" id="message" name="message" onChange={handleChange} required/>
                        <button className="resume-btn">Message <MdOutlineMailOutline/></button>
                    </form>
                </div>
             </div>
             </div>
        </div>
    )
}