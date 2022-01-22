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
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus lacus massa, egestas ut porta sed, malesuada et ex. Sed volutpat molestie odio, ut ullamcorper neque luctus nec. Nunc ut porttitor ante. Etiam sollicitudin enim turpis, sit amet consequat ex ullamcorper ut. Sed consequat eros quis felis mollis ornare. Integer tincidunt mollis dui, et ornare nulla dictum eu. Etiam eu convallis felis. In sit amet lectus lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id magna tortor.</p>
                    <br />
                    <p>Curabitur vitae ipsum in mauris placerat elementum. In bibendum nisl ipsum, quis ullamcorper odio venenatis sed. Pellentesque id viverra nulla. Ut nec turpis et ligula tempor rutrum. Nullam et felis lacinia, congue metus quis, dictum massa. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce efficitur efficitur auctor. Pellentesque venenatis non neque ac gravida. Etiam a turpis feugiat mi vulputate pharetra nec vitae eros. Donec sit amet viverra tortor.</p>
                </div>
            </div>
        </div>
    )
}

export default Bio