import "./index.css";

const tek = ['React.js', 'MongoDB', 'Express.js', 'node.js', 'Axios', 'Next.js', 'Redux', 'git', 'jQuery', 'Materialize', 'Socket.io', 'Moment.js', 'React native', 'Electron.js'];
const lang = ['HTML', 'CSS', 'JavaScript', 'SQL'];

function TechSkills() {
    let i = 0
    return(
        <div className="skill-con">
            <h2 className="header-1">Libraries/Tools</h2>
            <h2 className="header-2">languages</h2>
            <div className="tek-con">
                {tek.map(tek => {
                    i++
                return(
                    <div key={i} className="tek-text">
                        <p>{tek}</p>
                    </div>
                    );
                })}
            </div>
            
            <div className="lang-con">
            {lang.map(lang => {
                    i++
                return(
                    <div key={i} className="lang-text">
                        <p>{lang}</p>
                    </div>
                    );
                })}
            </div>
        </div>
    )
}

export default TechSkills