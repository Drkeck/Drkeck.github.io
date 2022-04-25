import "./index.css"
import {profile} from "../../assets"

function Bio() {

    return(
        <div className="container-bio">
            <div>
                <img src={profile} className="profile" alt="Profile"></img>
            </div>
            <div>
                <h1 className="name">Alexander keckley</h1>
                <h3 className="title">Software Developer</h3>
                <h5 className="title">Lake Orion, Michigan</h5>

                <div className="about-me">
                    <p>A hardworking, determined, and forward thinking Full Stack Developer that specializes in MongoDB, Express.js, React.js, and Node.js. I enjoy learning new skills and looking for new opportunities to advance my career as a software engineer.</p>
                    <br />
                    <p>I have also worn many other hats allowing me to dip hands into other fields such as: Video Editing, Live Streaming(Twitch), Computer building, and Digital Art</p>
                </div>
            </div>
        </div>
    )
}

export default Bio