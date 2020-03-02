import "./PortfolioList.css";
import React from "react";
import kissAndMakeup from "../images/kiss-and-makeup.PNG";
import pokemonMaster from "../images/pokemon-master.PNG";
import theShadows from "../images/the-shadows.PNG";
import quotepad from "../images/quotepad.PNG";
import warcraft from "../images/warcraft.PNG";
import bgsuns from "../images/bgsuns.PNG";
import PortfolioItem from "./PortfolioItem"


const PortfolioList = () => {

    return (
        <div className="ui relaxed divided list portfolio-list">
            <PortfolioItem
                title="Kiss and Makeup"
                imgSrc={kissAndMakeup}
                imgAlt="Asian bridal website"
                desc="Asian bridal hair and beauty static site build for a client."
                code="https://github.com/Rorywork/kiss-and-makeup"
                tech={["HTML", "CSS", "Bootstrap", "Jquery"]}
                url="https://rorywork.github.io/kiss-and-makeup/"
            />
            <PortfolioItem
                title="Pokemon Master"
                imgSrc={pokemonMaster}
                imgAlt="Api based Pokemon game"
                desc="Pokemon themed guessing game."
                code="https://github.com/Rorywork/pokemon-master"
                tech={["HTML", "CSS", "Bootstrap Grid", "Javascript", "PokeAPI"]}
                url="https://rorywork.github.io/pokemon-master/"
            />
            <PortfolioItem
                title="The Shadows"
                imgSrc={theShadows}
                imgAlt="Flask Photography website"
                desc="Website for users to share black and white photos."
                code="https://github.com/Rorywork/The-Shadows"
                tech={["HTML", "CSS", "Javascript", "Python", "Flask", "MongoDB"]}
                url="https://the-shadows.herokuapp.com/"
            />
            <PortfolioItem
                title="Quotepad"
                imgSrc={quotepad}
                imgAlt="Django Full stack website"
                desc="Generate PDF quotes for customers of boiler surveys."
                code="https://github.com/Rorywork/bquotepad"
                tech={["HTML", "CSS", "Javascript", "Python", "Django", "MySql"]}
                url="https://rorytesting.pythonanywhere.com/"
            />
            <PortfolioItem
                title="Warcraft"
                imgSrc={warcraft}
                imgAlt="Wow Interface"
                desc="Building a trading interface based upon a popular MMORPG."
                code="https://rorywork.github.io/wow-interface/"
                tech={["HTML", "CSS", "Javascript", "SASS"]}
                url="https://rorywork.github.io/wow-interface/"
            />
            <PortfolioItem
                title="Sports Club Video Player"
                imgSrc={bgsuns}
                imgAlt="BG Suns Video Player"
                desc="Video player utilising Youtube API for a sports team."
                code="https://rorywork.github.io/wow-interface/"
                tech={["React", "HTML", "CSS", "Youtube API"]}
                url="https://rorywork.github.io/BGSuns-react-app/"
            />
        </div>
    );
}

export default PortfolioList;