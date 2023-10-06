import React from "react";
import Draggable from "react-draggable";
import '../TechKnowledge/index.css'

export default function TeckPoints({point}) {
    return(
        <Draggable>
            <div className="tek-text">
                <p>{point}</p>
            </div>
        </Draggable>
    )
}
