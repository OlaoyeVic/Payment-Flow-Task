import React from "react";
import './styles/personal-info.scss'
import Input from "../components/CustomInput";
import Button from "../components/Button";
import Header from "../components/Header";
import { Link } from 'react-router-dom';

const PersonalInfo = () => {
    return(
        <>
        <Header />
        <div className="personal-info">
            <div className="form-container">
                <Input
                    type="text"
                    id="name"
                    name="name"
                    label="Name"
                    placeholder="Opara Linus Ahmed"
                    variant="white"
                    required 
                />
                <Input
                    type="text"
                    id="name"
                    name="name"
                    label="Email Address *"
                    placeholder="OparaLinusAhmed@devmail.com"
                    variant="white"
                    required 
                />
                <Input
                    type="text"
                    id="name"
                    name="name"
                    label="Address 1"
                    placeholder="The address of the user goes here"
                    variant="white"
                    required 
                />
                <Input
                    type="text"
                    id="name"
                    name="name"
                    label="Address 2"
                    placeholder="and here"
                    variant="white"
                    required 
                />
                <div className="lga">
                    <div className="lga-input">
                    <Input
                        type="text"
                        id="name"
                        name="name"
                        label="Local Government"
                        placeholder="Surulere"
                        variant="white"
                        required 
                    />
                    </div>
                    <div className="custom-select">
                        <label htmlFor="state">State</label>
                        <select>
                            <option value="lagos">Lagos</option>
                            <option value="abuja">Abuja</option>
                            <option value="kano">Kano</option>
                        </select>
                    </div>
                </div>
                <div className="button">
                    <Link to="/billing-info">
                        <Button type="first" label="Next" />
                    </Link>
                    <Link to="/confirm-payment">
                        <Button type="second" label="Cancel Payment" />
                    </Link>
                </div>
            </div>
        </div>
        </>
    )
}
export default PersonalInfo