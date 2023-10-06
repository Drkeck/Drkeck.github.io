import React from "react";
import "./index.css";
import TeckPoints from "../Teckpoints";

const tek = ['HTML', 'CSS', 'SQL', 'C#', 'git', 'jQuery', 'Electron.js', 'WebSockets', 'three.js', ];
// TODO: need to retool this to utilized the automtic version i made in teckpoints
function TechSkills() {
    return(
        <div className="skill-con">
        <h2 className="header-1">Other Technologies I've spent time with</h2>
            <div className="tek-con">
                {tek.map((tek , id) => {
                return(
                    <TeckPoints point={tek} key={id} />
                )})}
            </div>

        </div>
    )
}

export default TechSkills
