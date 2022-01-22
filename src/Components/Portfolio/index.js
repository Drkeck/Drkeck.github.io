import "./index.css";

const prtWrk = [
    {
        name: "Thrallchives",
        github: "",
        deployed: "",
        description: "",
        tech: ""
    }, 
    {
        name: "DeceptiveBrownie Epk",
        github: "",
        deployed: "",
        description: "",
        tech: ""
    }, 
    {
        name: "D&D Character Generator",
        github: "",
        deployed: "",
        description: "",
        tech: ""
    }, 
    {
        name: "Darbe",
        github: "",
        deployed: "",
        description: "",
        tech: ""
    }, 
    {
        name: "",
        github: "",
        deployed: "",
        description: "",
        tech: ""
    }
]

function Portfolio() {

    let i = 0;

    return(
        <div>
            {prtWrk.map(project => {
                const {
                    name,
                    github,
                    deployed,
                    description,
                    tech
                } = project;
                i++

             return(
                <div key={i}>
                    <h1>{name}</h1>
                </div>
             )
        })}
        </div>
    )
}

export default Portfolio