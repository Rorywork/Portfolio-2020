import "./TechList.css";
import React from "react";
import TechItem from "./TechItem";

const TechList = ({ tech, code }) => {

    const renderedList = tech.map(techItem => {
        return <TechItem tech={techItem} />;
    })

    return (
        <div className="tech-list">
            <a className="item-code" href={code} target="_blank">View Code</a>
            {renderedList}
        </div>
    );
}

export default TechList;