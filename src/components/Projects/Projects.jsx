import react from 'react';
import './Projects.css';
import Header from './../Header/Header'
import FooterLink from '../FooterLink/FooterLink';
import { projectsData } from './../../assets/ProjectsData';
import ProjectCard from "./ProjectCard"

const Projects = () =>{
    return(
        <div className="section-container">
            <Header heading="My Projects" details="Here are few things that i worked on" />
            <div className="project-cards-container">
                {/* {
                    projectsData.map(({ProjectName
                        ,ProjectDescription
                        ,ProjectUrl
                        ,VideoUrl
                        ,imageUrl}) =>{
                            return <ProjectCard 
                                ProjectName={ProjectName}
                                ProjectDescription={ProjectDescription}
                                ProjectUrl = {ProjectUrl}
                                VideoUrl = {VideoUrl}
                                imageUrl = {imageUrl}/>
                        }
                    )
                } */
                projectsData.map(
                    ({
                        projectName,
                        projectDescription,
                        imageUrl,
                        videoUrl,
                        projectUrl,
                    }) => {
                        return (
                            <ProjectCard
                                projectName={projectName}
                                projectDescription={projectDescription}
                                projectUrl={projectUrl}
                                imageUrl={imageUrl}
                                videoUrl={videoUrl}
                            />
                        );
                    }
                )
                }
            </div>
            <FooterLink phrase="check out " link="my skills!" toaddress="/skills"/>
        </div>
    )
}

export default Projects;