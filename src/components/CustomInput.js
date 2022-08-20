import React from "react";
import './styles/customInput.scss'

const Input = ({ type, id, onChange, label, placeholder, variant, name, value, min, required, error }) => {
    return (
        <div className={`custom__input`}>
            <label htmlFor={id} className={variant}>{label}</label>
            <input type={type} id={id} onChange={onChange} placeholder={placeholder} className={`${variant}`} name={name} value={value} minLength={min} required={required}/>
        </div>
    )
}
export default Input