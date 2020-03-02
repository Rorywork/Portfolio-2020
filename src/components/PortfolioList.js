import "./PortfolioList.css";
import React from "react";
import kissAndMakeup from "../images/kiss-and-makeup.PNG";
import pokemonMaster from "../images/pokemon-master.PNG";
import theShadows from "../images/the-shadows.PNG";
import quotepad from "../images/quotepad.PNG";
import warcraft from "../images/warcraft.PNG";
import PortfolioItem from "./PortfolioItem"


const PortfolioList = () => {

    return (
        <div className="ui relaxed divided list portfolio-list">
            <PortfolioItem
                title="Kiss and Makeup"
                imgSrc={kissAndMakeup}
                imgAlt="Asian bridal website"
                desc="This is a website for my portfolio"
                code="https://github.com/Rorywork/kiss-and-makeup"
                tech={["HTML", "CSS", "Bootstrap", "Jquery"]}
            />
            <PortfolioItem
                title="Pokemon Master"
                imgSrc={pokemonMaster}
                imgAlt="Api based Pokemon game"
                desc="This is a different project"
                code="https://github.com/Rorywork/pokemon-master"
                tech={["Gordon", "CSS", "Jesus"]}
            />
            <PortfolioItem
                title="The Shadows"
                imgSrc={theShadows}
                imgAlt="Flask Photography website"
                desc="Flask Photography website"
                code="https://github.com/Rorywork/The-Shadows"
                tech={["HTML", "CSS", "Bootstrap"]}
            />
            <PortfolioItem
                title="Quotepad"
                imgSrc={quotepad}
                imgAlt="Django Full stack website"
                desc="Django Full stack website"
                code="https://github.com/Rorywork/bquotepad"
                tech={["HTML", "CSS", "Bootstrap"]}
            />
            <PortfolioItem
                title="Warcraft"
                imgSrc={warcraft}
                imgAlt="Wow Interface"
                desc="Built using SASS and JS"
                code="https://rorywork.github.io/wow-interface/"
                tech={["HTML", "CSS", "Bootstrap"]}
            />
        </div>
    );
}

export default PortfolioList;