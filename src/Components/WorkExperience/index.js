import TeckPoints from "../Teckpoints";
import "./index.css";

const wrkExp = [{
    name: "Northwestern Mutual",
    joined: "May 2022",
    left: "Current employer",
    title: "Full Stack Engineer",
    description:"I was hired apart of a new team tasked with support projects across bounded contexts, and overall system health. While being a developer i also had experience designing one of our systems front end in figma, even had feedback cycles and itterations.",
    teckpoints: ["TypeScript", "Node", "React", "AWS", "Elk", "Jira", "Confluence", "gitlab", "gitlab-ci", "graphQl", "DynamoDB", "docker", "jest", "React testing library", "figma" ]    
},
    {
    name: "Darbe",
    joined: "November 2020",
    left:"currently contributing",
    title: "Full Stack Developer",
    description: "I was picked up out of bootcamp by Sebastion (Founder and CEO of darbe) as they were looking for develpers to talk to and call upon to build out their vision. I've been working with them through the design, development, and hopefully soon deployment of their platform",
    teckpoints: ["JavaScript", "Jira", "AWS", "Node", "MongoDB", "Redux", "WebSockets", "React", "Express.js", "Axios"]
},
    {
    name: "Legacy Medical",
    joined: "April 2021",
    left:"june 2021",
    title: "Medical Records Clerk",
    description: "This was the first time working in the medical field allowing me to observe how primary care physicians work and run their offices. Doing work as a clerk is surprisingly relaxing honestly enjoyed the silent resolve."
}]

function WorkExperience() {
    return(
        <div className="container-exp">
            {wrkExp.map((element, id) => (
            <div className="inner-exp">
                <div className="card-long" key={id}>
                    <h4 className="job-name">{element.name}</h4>
                    <h5 className="job-title">{element.title}</h5>
                    <h5 className="job-employment">{element.joined} - {element.left}</h5>
                    <p className="job-description">{element.description}</p>
                    <section className="experience-card">
                        <h6>Experience with</h6>
                    </section>
                </div>
                <div className="tek-points">
                {element.teckpoints?.map((point , id) => (
                    <TeckPoints point={point} key={id + point}/>
                ))}
                </div>
             </div>   
            ))}
        </div>
    )
}

export default WorkExperience
