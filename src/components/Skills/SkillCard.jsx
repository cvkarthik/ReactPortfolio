// import React from "react";
// import './Skills.css';
// const SkillCard = (skillName,skillUrl) =>{
//     return(
//         <div className="skill">
//             <img src={skillUrl} alt="skill">
//             </img>
//             <p>
//                {skillName} 
//             </p>
//         </div>
//     )
// }
// export default SkillCard;
import React from 'react';
import './Skills.css';

const SkillCard = ({ skillName, skillUrl }) => {
    return (
        <div className='skill'>
            <img src={skillUrl} alt='skill' />
            <p>{skillName}</p>
        </div>
    );
};

export default SkillCard;