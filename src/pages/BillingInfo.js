import React from "react";
import Input from "../components/CustomInput";
import Button from "../components/Button";
import './styles/billing-info.scss'
import Header from "../components/Header";
import { Link } from "react-router-dom";

const BillingInfo = () => {
    return (
        <>
        <Header />
        <div className="billing-info">
            <div className="form-container">
                <Input
                    type="text"
                    id="name"
                    name="name"
                    label="Name on Card *"
                    placeholder="Opara Linus Ahmed"
                    variant="white"
                    required 
                />
                <div className="custom-select">
                    <label htmlFor="state">Card Type *</label>
                    <select>
                        <option value="lagos">Visa</option>
                        <option value="abuja">Master Card</option>
                        <option value="kano">Verve</option>
                    </select>
                </div>
                <div className="card-form">
                    <div className="input-one">
                        <Input
                            type="text"
                            id="name"
                            name="name"
                            label="Card Details *"
                            placeholder="44960  44960  44960"
                            variant="white"
                            required 
                        />
                    </div>
                    <div className="input-two">
                        <Input
                            type="text"
                            id="name"
                            name="name"
                            label="Expiry Date *"
                            placeholder="04 / 23"
                            variant="white"
                            required 
                        />
                    </div>
                    <div className="input-three">
                        <Input
                            type="text"
                            id="name"
                            name="name"
                            label="CVV *"
                            placeholder="923"
                            variant="white"
                            required 
                        />
                    </div>
                </div>
                <div className="button">
                    <Link to="/confirm-payment">
                        <Button type="first" label="Next" />
                    </Link>
                    <Link to="">
                        <Button type="second" label="Cancel Payment" />
                    </Link>
                </div>
            </div>
        </div>
        </>
    )
}
export default BillingInfo