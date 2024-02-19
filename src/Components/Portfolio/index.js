import "./index.css";
import portfolio from './protfolio.json'

function Portfolio() {

    const prjects = portfolio.Projects

    return(
        <div className="card-cont">
            {prjects.map((project, index) => (
                <div key={project.name} className={`card-port ${project.name.split(' ')[0]}`}>
                    <h3 className="card-name">{project.name}</h3>
                    <h6 className="card-tech">{project.tech.split(',')}</h6>
                    <p className="card-desc">{project.description}</p>
                    {project.github? <a href={project.github}>Github</a>: ""}
                    {project.deployed? <a href={project.deployed}>Deployed</a>: ""} 
               </div>
             )
      )}
        </div>
    )
}

export default Portfolio
