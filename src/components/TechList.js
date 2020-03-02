import "./TechList.css";
import React from "react";
import TechItem from "./TechItem";

const TechList = ({ tech, code }) => {

    const renderedList = tech.map(techItem => {
        return <TechItem tech={techItem} />;
    })

    return (
        <div className="tech-list">
            <a className="item-code" onClick={() => { window.open(code) }} href={code} target="_blank" rel="noopener noreferrer" >View Code</a>
            {renderedList}
        </div>
    );
}

export default TechList;