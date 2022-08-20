import React from "react";
import './styles/header.scss'
import Progress from "./Progress";

const Header = () => {
    return (
        <div className="header">
            <div className="header-text">
                <h3>Complete Your Purchase</h3>
            </div>
            <Progress />
        </div>
    )
}
export default Header