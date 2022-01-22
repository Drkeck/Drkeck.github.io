import "./index.css";

const wrkExp = [{
    id: "1",
    name: "Darbe",
    joined: "November 2020",
    left:"Present employer",
    title: "Full Stack Developer",
    description: "I was picked up out of bootcamp by Sebastion (Founder and CEO of darbe) as they were looking for develpers to talk to and call upon to build out their vision. I've been working with them through the design, development, and hopefully soon deployment of their platform"
}, {
    id: "2",
    name: "Legacy Medical",
    joined: "April 2021",
    left:"june 2021",
    title: "Medical Records Clerk",
    description: "This was the first time working in the medical field allowing me to observe how primary care physicians work and run their offices. Doing work as a clerk is surprisingly relaxing honestly enjoyed the silent resolve."
}]

function WorkExperience() {
    return(
        <div className="container-exp">
            {wrkExp.map(element => (
                <div className="card-long" key={element.id}>
                    <h4 className="job-name">{element.name}</h4>
                    <h5 className="job-title">{element.title}</h5>
                    <h5 className="job-employment">{element.joined} - {element.left}</h5>
                    <p className="job-description">{element.description}</p>
                </div>
            ))}
        </div>
    )
}

export default WorkExperience