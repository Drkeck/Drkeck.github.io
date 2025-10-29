import "./index.css"

function Footer({footer}) {
    return(
        <footer className={!footer ? "info" : "footer-cont" }>
            {footer && <a href="emailto:k3ckl3y.a@gmail.com">Email</a>}
            <a href="https://github.com/drkeck">Github</a>
            {footer && <p className="fade">Made In React, with love.</p>}
            <a href="https://www.linkedin.com/in/alexkeckley/">LinkedIn</a>
            <a href="https://docs.google.com/document/d/1S_xcEX7eK-5jjAfI9jwXzuorqz2LhH4T/edit?usp=sharing&ouid=111069918300775259105&rtpof=true&sd=true">Resume</a>
        </footer>
    )
}

export default Footer
