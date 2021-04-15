import React from 'react'
import { FaHtml5, FaCss3Alt, FaJsSquare, FaWordpress, FaGithub} from "react-icons/fa";

function Skill() {
    return (
        <div className="skill">
            <h1>Skills</h1>
            <hr />
            {" "}
            <div className='logos'>
            <FaHtml5 />
            <FaCss3Alt />
            <FaJsSquare />
            <FaWordpress />
            <FaGithub />
            </div>
        </div>
    )
}

export default Skill
