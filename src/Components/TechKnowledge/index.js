import React from "react";
import Draggable from "react-draggable";
import "./index.css";

const tek = ['React.js', 'MongoDB', 'Express.js', 'node.js', 'Axios', 'Next.js', 'Redux', 'git', 'jQuery', 'Materialize', 'Socket.io', 'Moment.js', 'React native', 'Electron.js', 'WebSockets'];
const lang = ['HTML', 'CSS', 'JavaScript', 'SQL', 'C#'];

function TechSkills() {
    const nodeRef = React.useRef(null);
    return(
        <div className="skill-con">
            <div className="tek-con">
                <h2 className="header-1">Libraries/Tools</h2>
                {tek.map((tek , id) => {
                return(
                    <Draggable key={id} noderef={nodeRef}>
                        <div key={id} className="tek-text" noderef={nodeRef}>
                            <p>{tek}</p>
                        </div>
                    </Draggable>
                    );
                })}
            </div>
            
            <div className="lang-con">            
                <h2 className="header-2">languages</h2>

                {lang.map((lang, id) => {
                    return(
                        <Draggable key={id} noderef={nodeRef}>
                            <div key={id} className="lang-text" noderef={nodeRef}>
                                <p>{lang}</p>
                            </div>
                        </Draggable>
                        );
                    })}
            </div>
        </div>
    )
}

export default TechSkills
