import React from "react";

export default function CertificateCard({num, icon, title, content}){
    return(
        <div className="certificate-card">
            {icon}
            <h2>{title}</h2>
            <div className="line"></div>
            <p>{content}</p>
        </div>
    )
}