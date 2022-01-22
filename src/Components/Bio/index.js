import "./index.css"

function Bio() {

    return(
        <div className="container">
            <div>
                <img src="https://via.placeholder.com/150" className="profile" alt="Profile"></img>
            </div>
            <div>
                <h1 className="name">Alexander keckley</h1>
                <h3 className="title">Software Developer</h3>

                <div className="about-me">
                    <p>A hardworking, determined, and forward thinking Full Stack Developer that specializes in MongoDB, Express.js, React.js, and Node.js. I enjoy learning new skills and looking for new opportunities to advance my career as a software engineer.</p>
                    <br />
                    <p>I have also worn many other hats allowing my to dip my hands into other fields of influence, such as: Video Editing, Live Streaming(Twitch), Writing, Design, Computer Building, and various other hobbies.</p>
                </div>
            </div>
        </div>
    )
}

export default Bio