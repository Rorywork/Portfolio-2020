import React from "react";
import TechItem from "./TechItem";

const TechList = (tech) => {

    const renderedList = tech.tech.map(techItem => {
        return <TechItem tech={techItem} />;
    })

    return (
        <div>
            {renderedList}
        </div>
    );
}

export default TechList;