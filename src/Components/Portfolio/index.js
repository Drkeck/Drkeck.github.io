import "./index.css";

const prtWrk = [
    {
        name: "Thrallchives",
        github: "https://github.com/Drkeck/Thrall-chives",
        deployed: "",
        description: "An archival app i was building for my 'client' she's my significant other and was at the time doing commissions for 3d models, so i started building her software in Electron.js to keep track of her clients orders",
        tech: "Electron.js, HTML, JavaScript, CSS, MongoDB Atlas"
    }, 
    {
        name: "DeceptiveBrownie Epk",
        github: "https://github.com/Drkeck/DB-Epk",
        deployed: "https://deceptivebrownie.herokuapp.com/",
        description: "Electronic Press Kit for DeceptiveBrownie, a new talent in the market and a close friend of mine that i have known for around 3 years.",
        tech: "React, Spotify's-Api, Bootstrap, Axios"
    }, 
    {
        name: "D&D Character Generator",
        github: "https://github.com/bskutivan/character_builder",
        deployed: "https://dnd-char-builder.herokuapp.com/",
        description: "This little gem is a project that i did back when i was in bootcamp, its something im still proud of as well as know that products like this while niche are wanted by table top roleplayers",
        tech: "HandleBars.js, Express.js, sequelize, bcrypt"
    }, 
    {
        name: "Darbe",
        github: "",
        deployed: "https://Darbe.co",
        description: "I will include darbe here on the grounds that it is my most recent professional work and is worth looking at, i worked with a design team to make that vision come to life and have been forever fixing any styling bugs that have shown thier ugly faces",
        tech: "MongoDB Atlas, Express.js, React.js, Node.js, Axios"
    }, 
    {
        name: "DBFZ Randomizer",
        github: "https://github.com/Drkeck/DBFZ_Team_Random",
        deployed: "https://drkeck.github.io/DBFZ_Team_Random",
        description: "Something i made in my free time as well as something to break up the more professional 'client facing' flow, just something personal that i saw through to its end and have some ides to expand apon it further.",
        tech: "HTML, CSS, JavaScript"
    }
]

function Portfolio() {

    let i = 0;

    return(
        <div className="card-cont">
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
                <div key={i} className="card-port">
                    <h3 className="card-name">{name}</h3>
                    <h6 className="card-tech">{tech.split(',')}</h6>
                    <p className="card-desc">{description}</p>
                    {github? <button href={github}>Github</button>: ""}
                    {deployed? <button href={deployed}>Deployed</button>: ""} 
               </div>
             )
        })}
        </div>
    )
}

export default Portfolio