import React from "react";
import PortfolioItem from "./PortfolioItem"


const PortfolioList = () => {

    return (
        <div>
            <PortfolioItem
                title="Kiss and Makeup"
                imageSrc="https://images.pexels.com/photos/3706707/pexels-photo-3706707.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                description="This is a website for my portfolio"
                code="https://github.com/Rorywork/kiss-and-makeup"
            />
            <PortfolioItem
                title="Pokemon Master"
                imageSrc="https://images.pexels.com/photos/3793689/pexels-photo-3793689.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                description="This is a different project"
                code="https://github.com/Rorywork/pokemon-master"
            />
        </div>
    );
}

export default PortfolioList;