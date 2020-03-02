import "./Cv.css";
import React from "react";
import RoryCV from "../documents/roryCV.pdf";


const Cv = () => {
    return (
        <div>
            <a className="cv" href={RoryCV} target="_blank">CV</a>
        </div>
    )
}

export default Cv;