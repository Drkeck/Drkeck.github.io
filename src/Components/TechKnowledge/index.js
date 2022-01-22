import "./index.css";

const tek = ['React.js', 'MongoDB', 'Express.js', 'node.js', 'Axios', 'Next.js', 'Redux', 'git', 'jQuery', 'Materialize', 'Socket.io', 'Moment.js', 'React native', 'Electron.js'];
const lang = ['HTML', 'CSS', 'JavaScript', 'SQL'];

function TechSkills() {
    let i = 0
    return(
        <div>
            <h2>Tech Skills</h2>
            <div className="tek-con">
                {tek.map(tek => {
                    i++
                return(
                    <div key={i}>
                        <p>{tek}</p>
                    </div>
                    );
                })}
            </div>
        </div>
    )
}

export default TechSkills