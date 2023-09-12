import React from "react";

export default function CertificateCard({num, icon, title, content}){
    return(
        <div className={ num==="01" ? "certificate-card first-certificate" : "certificate-card"} num={num}>
            {icon}
            <h2>{title}</h2>
            <div className={num==="01" ? "line first-line" : "line"}></div>
            <p>{content}</p>
        </div>
    )
}