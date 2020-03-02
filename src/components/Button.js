import "./Button.css";
import React from "react";

const Button = ({ type, href }) => {

    return (
        <div>
            <a className="button" href={href}>
                <i class={`fab fa-${type}`}></i>
            </a>
        </div >
    )

}

export default Button;