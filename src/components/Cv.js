import "./Cv.css";
import React from "react";
import RoryCV from "../documents/roryCV.pdf";


const Cv = () => {
    return (
        <div>
            <a className="cv" href={RoryCV} target="_blank" rel="noopener noreferrer" >CV</a>
        </div>
    )
}

export default Cv;