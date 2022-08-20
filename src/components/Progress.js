import React from "react";
import './styles/progress.scss'
import { NavLink } from "react-router-dom";
import PersonalInfo from "../pages/PersonalInfo";

const Progress = () => {
    const steps = [
        {
            page: "Personal Info",
            path: "/"
        },
        {
            page: "Billing Info",
            path: "/billing-info"
        },
        {
            page: "Confirm Payment",
            path: "/confirm-payment"
        }
    ]

    const handleStop = (event) => {
        event.preventDefault()
    }
    return (
        <div className="progress">
            <div className="pages">
                {steps.map((step, index) => (
                    <>
                        <NavLink activeClassName="active" key={index} to={step.path}>
                            <div>{step.page}</div>
                        </NavLink>
                    </>
                ))}
            </div>
            <hr />
        </div>
    )
}
export default Progress