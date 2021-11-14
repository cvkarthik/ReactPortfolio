// import React from 'react';
// import FooterLink from '../FooterLink/FooterLink';
// import Header from '../Header/Header';
// import { skillList } from './../../assets/skillsData';
// import './Skills.css';
// import skillsVector from './../../assets/skills_vector.png';
// import SkillCard from './SkillCard';
// import React from "react";
// import './Skills.css';
// import Header from './../Header/Header';
// import FooterLink from './../FooterLink/FooterLink';
// import skillsVector from './../../assets/about_vector.png';
// import {skillList} from "./../../assets/skillsData";
// import SkillCard from "./SkillCard";

// const Skills = () => {
//     return (
//         <div className='section-container'>
//             <Header
//                 heading='My Skills.'
//                 details="Passionate about new technologies, I keep exploring stuff. Here's the tech stack I've worked with!"
//             />

//             <div className='skill-card-container'>
//                 {skillList.map(( {obj} ) => (
//                     <SkillCard skillName={obj.skillName} skillUrl={obj.skillUrl} />
//                 ))}
//             </div>

//             <FooterLink phrase='Get in ' link='touch.' toAdress='/contact' />

//             <div className='skills-vector-frame'>
//                 <img
//                     src={skillsVector}
//                     alt='skills'
//                     className='skills-vector'
//                 />
//             </div>
//         </div>
//     );
// };

// export default Skills;
import react from "react";
import './Skills.css';
import Header from './../Header/Header'
import FooterLink from './../FooterLink/FooterLink'
import skillsvector from './../../assets/about_vector.png'
import {skillList} from "./../../assets/skillsData"
import SkillCard from "./SkillCard"

const Skills = () =>{
    return(
        <div className="section-container">
            <Header heading = "My Skills"
            details = "These are some of the skills that I am good at"></Header>
            <div className='skill-card-container'>
                {
                    skillList.map(({skillName,skillUrl}) =>{
                        //console.log(s.skillName,s.skillUrl);
                        //const skillName = s.skillName;
                        //const skillUrl = s.skillUrl;
                        return <SkillCard skillName={skillName} skillUrl = {skillUrl} />
                        //return <h1>{s.skillName}</h1>;
                    })
                }
            </div>
            <FooterLink phrase = "Get in touch with me "
            link="contact me"
            toaddress='/Contact' />
            <div className="skills-vector-frame">
                <img src={skillsvector} alt="skills bg" className="skills-vector">
                </img>
            </div>
        </div>
    )
}

export default Skills;