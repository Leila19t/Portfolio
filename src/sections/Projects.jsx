import React from "react";
import { reactApps } from "../data";
import { vanillaJSApps } from "../data"
import ProjectCard from "../components/ProjectCard";


export default function Projects(){

    const reactAppElements = reactApps.map(app => <ProjectCard name={app.name} description={app.description} image={app.image} link={app.link}/>)
    const JSAppElements = vanillaJSApps.map(app => <ProjectCard name={app.name} description={app.description} image={app.image} link={app.link}/>)

    return(
        <div className="projects-container">
             <p>PORTFOLIO</p>
             <h3>Featured <span className="green">React projects</span>.</h3>
             <div className="inner-projects-container">
                {reactAppElements}
             </div>
             <h3>Featured <span className="green">Vanilla JavaScript projects</span>.</h3>
             <div className="inner-projects-container">
                {JSAppElements}
             </div>
        </div>
    )
}