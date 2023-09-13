import React from "react";


export default function ProjectCard({ name, description, link, image }) {
    return (
        <div className="project-card">
            <div>
                <a target="_blank" href={link}>
                    <img src={image}className="thumbnail" width="100%" />
                </a>
            </div>
            <h3>{name}</h3>
            <p>{description}</p>
        </div>
    )
}