import React from "react";


export default function ProjectCard({name, description, link, image}){
    return(
        <div className="project-card">
            <a target="_blank" href={link}>
                <div className="thumbnail">
                    <img src={image} width="100%"/>
                </div>
            </a>
            <h3>{name}</h3>
            <p>{description}</p>
        </div>
    )
}