import "./PortfolioItem.css";
import React from "react";
import TechList from "./TechList"


const PortfolioItem = ({ title, imgSrc, imgAlt, desc, code, tech }) => {

    return (
        <div className="portfolio-item">
            <h1 className="item-title">{title}</h1>
            <img className="ui image img" src={imgSrc} alt={imgAlt}></img>
            <div className="overlay">
                <TechList code={code} tech={tech} />
            </div>
            <p className="item-desc">{desc}</p>
        </div>
    );
}

export default PortfolioItem;