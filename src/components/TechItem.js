import "./TechItem.css";
import React from "react";

const TechItem = (tech) => {

    return (
        <h5 className="techItem">{tech.tech}</h5>
    )


}

export default TechItem;