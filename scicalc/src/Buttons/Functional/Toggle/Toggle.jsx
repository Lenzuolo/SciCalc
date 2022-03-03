import React from "react";
import './Toggle.css';

const Toggle = ({label,changeHandler,disabled}) =>
{
    return (
        <div className='box'>
            <label htmlFor={label}>{label}</label>
            <input type='checkbox' id={label} disabled={disabled} className="toggle" onChange={()=>changeHandler()}/>
        </div>
    )
}

export default Toggle;