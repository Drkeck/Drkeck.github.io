import Draggable from "react-draggable";
import "./index.css";

const tek = ['React.js', 'MongoDB', 'Express.js', 'node.js', 'Axios', 'Next.js', 'Redux', 'git', 'jQuery', 'Materialize', 'Socket.io', 'Moment.js', 'React native', 'Electron.js'];
const lang = ['HTML', 'CSS', 'JavaScript', 'SQL'];

function TechSkills() {
    let i = 0
    return(
        <div className="skill-con">
            <div className="tek-con">
                <h2 className="header-1">Libraries/Tools</h2>
                {tek.map(tek => {
                    i++
                return(
                    <Draggable>
                        <div key={i} className="tek-text">
                            <p>{tek}</p>
                        </div>
                    </Draggable>
                    );
                })}
            </div>
            
            <div className="lang-con">            
                <h2 className="header-2">languages</h2>

                {lang.map(lang => {
                        i++
                    return(
                        <Draggable>
                            <div key={i} className="lang-text">
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