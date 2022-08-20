import React from "react";
import './styles/button.scss'

const Button = ({ label, type="primary", onClick}) => {
    let btnClass = "variant"
    
    switch(type) {
        case "first":
            btnClass = "variant first";
            break;
        case "second":
            btnClass = "variant second"
            break;

        default:
             btnClass = "variant"
    }
    return (
        <button  className={btnClass} onClick={onClick} >
            {label}
        </button>
    )
}
export default Button