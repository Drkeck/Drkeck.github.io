import "./index.css"
import {profile} from "../../assets"

function Bio() {

    return(
        <div className="container-bio">
            <div>
                <img src={profile} className="profile" alt="Profile"></img>
            </div>
            <div>
                <h1 className="name">Alexander Keckley</h1>
                <h3 className="title">Full Stack Software Engineer</h3>
                <h5 className="title">Lake Orion, Michigan</h5>

                <div className="about-me">
                    <p>As a Full Stack Software Engineer I've been able to learn, itterate, and become comfortable in different technologies responsible for running the world. I've worked close with designers to bring products to life, as well played my hand as a designer for tools that my team and I have brought to life.</p>
                    <br />
                    <p>I have also dipped my hands into other fields such as: Video Editing, Live Streaming, Computer building, and 3D asset creation</p>
                </div>
            </div>
        </div>
    )
}

export default Bio
