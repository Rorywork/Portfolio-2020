import "./PortfolioItem.css";
import React from "react";


const PortfolioItem = ({ title, imgSrc, imgAlt, desc, code }) => {

    return (
        <div className="portfolio-item">
            <h1 className="item-title">{title}</h1>
            <img className="ui image img" src={imgSrc} alt={imgAlt}></img>
            <a className="item-code" href={code} target="_blank">See Code</a>
            <p className="item-desc">{desc}</p>
        </div>
    );
}

export default PortfolioItem;