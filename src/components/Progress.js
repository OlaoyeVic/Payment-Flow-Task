import React from "react";
import './styles/progress.scss'
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom"
import PersonalInfo from "../pages/PersonalInfo";

const Progress = () => {
    const [isActive, setIsActive] = React.useState(false)
    const location = useLocation()
    const { pathname } = location
    const splitLocation = pathname.split("/")
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

    const handleClick = (event) => {
        event.preventDefault()
        setIsActive(current => !current)
    }
    return (
        <div className="progress">
            <div className="pages">
                {steps.map((step, index) => (
                    <>
                        <NavLink
                        // className={isActive ? '.active::after': ''}
                        // activeClassName="active"
                        className={{"active" : "" === splitLocation[1] ? "active" : "billing-info" === splitLocation[1] ? "active" : "confirm-payment" === splitLocation[1]}} 
                        key={index} 
                        to={step.path}
                        onClick={handleClick}
                        >
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