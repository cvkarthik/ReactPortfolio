import React from "react";
import './Projects.css'

const ProjectCard = ({
    projectName,
    projectDescription,
    imageUrl,
    videoUrl,
    projectUrl
}) => {
    return (
        <div className='project-card'>
            <div className='image-container'>
                <a href={projectUrl} className='project-external-link'>
                    <img
                        src={imageUrl}
                        alt='project'
                        className='project-image'
                    />
                </a>
            </div>

            <div className='project-details-container'>
                <h2 className='project-heading'>{projectName}</h2>
                <p className='project-details'>{projectDescription}</p>
                <a href={videoUrl} className='project-yt-link'>
                    Watch More!
                </a>
            </div>
        </div>
    );
};
// const ProjectCard = ({ProjectName
//     ,ProjectDescription
//     ,ProjectUrl
//     ,VideoUrl
//     ,imageUrl}) =>{ 
//         return (
//             <div className="project-card">
//                 <div className="img-container">
//                     <a href={ProjectUrl} className="project-external-link">
//                         <img src={imageUrl} alt="project image" className="project-image"/>
//                     </a>
//                 </div>
//                 <div className="project-details-container">
//                     <h2 className="project-heading">
//                         {ProjectName}
//                     </h2>
//                     <p className="project-details">
//                         {ProjectDescription}
//                     </p>
//                     <a href={VideoUrl} className="project-yt-link">Watch more!</a>
//                 </div>
//             </div>
//         );
//     };

export default ProjectCard;