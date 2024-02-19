import React from "react";
import Draggable from "react-draggable";
import './index.css'

export default function TeckPoints({point}) {

  const nodeRef = React.useRef(null);

    return(
          <Draggable nodeRef={nodeRef}>
            <div className="tek-text" ref={nodeRef}>
                <p>{point}</p>
            </div>
          </Draggable>
    )
}
