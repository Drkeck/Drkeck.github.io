import "./index.css";

const wrkExp = [{
    name: "Northwestern Mutual",
    joined: "May 2022",
    left: "Current employer",
    title: "Full Stack Engineer",
    description: "I was reqruited to Northwestern Mutual as a member of a new team aimed to better the departments engineering and support efforts. I was tasked with designing, building, and maintaining our tools while also jumping across bounded contexts to keep our services up to date. I had experience working in AWS's Lambdas, Microservices, terraform, microsoft's msal, gitlab-ci, and other internal systems; I had to use Jira, confluance, elk, slack, gitlab, and zoom to communicate and monitor our changes and progress of our projects"
    },
    {
    name: "Darbe",
    joined: "November 2020",
    left:"May 2022",
    title: "Full Stack Developer",
    description: "I was picked up out of bootcamp by Sebastion (Founder and CEO of darbe) as they were looking for develpers to talk to and call upon to build out their vision. I've been working with them through the design, development, and hopefully soon deployment of their platform"
}, {
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
                <div className="card-long" key={id}>
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
