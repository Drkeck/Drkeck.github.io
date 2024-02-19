import React from "react";
import "./index.css";
import TeckPoints from "../Teckpoints";

const tek = ['HTML', 'CSS', 'SQL', 'C#', 'git', 'jQuery', 'Electron.js', 'WebSockets', 'three.js', 'Tauri', 'vite'];
function TechSkills() {
    return(
        <div className="skill-con">
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
