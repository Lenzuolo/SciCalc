import React from "react";
import './PushButton.css';

const PushButton = ({label,changeHandler}) => {
    return (
        <div className='box'>
            <label htmlFor={label}>{label}</label>
            <input type='button' id={label} className="push" onChange={()=>changeHandler()}/>
        </div>
    );
}

export default PushButton;