import TeckPoints from "../Teckpoints";
import workExp from "./workExp.json"
import "./index.css";

function WorkExperience() {
  const jobs = workExp.Jobs

  function months(dateFrom, dateTo) {
    const months = dateTo.getMonth() - dateFrom.getMonth() + 
   (12 * (dateTo.getFullYear() - dateFrom.getFullYear()))
    return ` ${months} Months `
  }

    return(
        <div className="container-exp">
            {jobs.map((element, id) => (
            <div className="inner-exp" key={id + element.name}>
                <div className="card-long">
                    <h4 className="job-name">{element.name}</h4>
                    <h5 className="job-title">{element.title}</h5>
                    <h5 className="job-employment">
              {element.joined}
              -
              {element.left}
              {' '}
              ({months(new Date(element.joined), element.left ==="Current" ? new Date(Date.now()) : new Date(element.left))})
            </h5>
                    <p className="job-description">{element.description}</p>
                {element.teckpoints ? (
                    <section className="experience-card">
                        <h6>Experience with</h6>
                    </section>
                ) : <></>}
                </div>
                <div className="tek-points">
                {element.teckpoints?.map((point , id) => (
                    <TeckPoints point={point} key={id + point}/>
                ))}
                </div>
             </div>   
            ))}
        </div>
    )
}

export default WorkExperience
