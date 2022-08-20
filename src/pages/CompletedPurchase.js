import React from "react";
import './styles/completed-purchase.scss'
import checkmark from '../assets/Vector.svg'
import { Link } from "react-router-dom";

const CompletedPurchase = () => {
    return (
        <div className="dialog-box">
            <div className="checkmark">
                <img src={checkmark} alt="checkmark" />
            </div>
            <h2>Purchase Completed</h2>
            <br />
            <p>Please check your email for details concerning this transaction</p>
            <br />
            <Link to="/">
                <button>Return Home</button>
            </Link>
        </div>
    )
}
export default CompletedPurchase