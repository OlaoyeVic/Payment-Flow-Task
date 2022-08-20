import React from "react";
import './styles/confirm-payment.scss'
import Button from "../components/Button";
import Input from "../components/CustomInput";
import Header from "../components/Header";
import { Link } from "react-router-dom";

const ConfirmPayment = () => {
    return (
        <>
        <Header />
        <div className="confirm-payment">
            <div className="payment-container">
                <div className="item-name">
                    <div>Item Name</div>
                    <div>₦ Price</div>
                </div>
                <div className="item">
                    <div>Data science and usability</div>
                    <div>₦ 50, 000</div>
                </div>
                <div className="shipping">
                    <div>Shipping</div>
                    <div>0.00</div>
                </div>
                <br />
                <hr />
                <br />
                <div className="total">
                    <div>Total</div>
                    <div>50, 000</div>
                </div>
            </div>
            <div className="button">
                <Link to="/completed-purchase">
                    <Button type="first" label="Pay" />
                </Link>
                <Link to="">
                    <Button type="second" label="Cancel Payment" />
                </Link>
            </div>
        </div>
        </>
    )
}
export default ConfirmPayment