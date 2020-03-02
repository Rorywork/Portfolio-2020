import "./Button.css";
import React from "react";

const Button = ({ type, href }) => {

    return (
        <div>
            <a className="button" href={href} target="_blank">
                <i class={`fab fa-${type}`}></i>
            </a>
        </div >
    )

}

export default Button;