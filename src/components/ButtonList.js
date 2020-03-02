import "./ButtonList.css";
import React from "react";
import Button from "./Button"
import Cv from "./Cv"

const ButtonList = () => {
    return (
        <div className="button-list ui relaxed divided list portfolio-list">
            <Cv />
            <Button href="https://www.linkedin.com/in/rory-lindsay-b23631153/" type="linkedin" />
            <Button href="https://github.com/Rorywork" type="github" />
        </div>
    )
}

export default ButtonList;