import "./index.css";

const wrkExp = [{
    id: "1",
    name: "Darbe",
    joined: "November 2020",
    left:"Present employer",
    title: "Full Stack Developer",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum faucibus felis at urna feugiat rutrum. Aliquam erat volutpat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Morbi luctus neque quis sem pretium mollis. Nullam commodo sapien id purus volutpat, quis euismod quam."
}, {
    id: "2",
    name: "Legacy Medical",
    joined: "April 2021",
    left:"june 2021",
    title: "Medical Records Clerk",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum faucibus felis at urna feugiat rutrum. Aliquam erat volutpat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Morbi luctus neque quis sem pretium mollis. Nullam commodo sapien id purus volutpat, quis euismod quam."
}]

function WorkExperience() {
    console.log(wrkExp[0].name)
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