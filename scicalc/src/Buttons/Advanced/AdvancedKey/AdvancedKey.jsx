import React from "react";
import './AdvancedKey.css';

const AdvancedKey = (
    {
        border,
        icon,onClick, children
    }) => {
            return (
                <button className={
                     `advanced ${border === 'top-left' || 'top-right' || 'bottom-left' || 'bottom-right' ? border: ""}`} 
                    onClick={()=>onClick?.()}
                    >
                    {(icon || children) ?? "?"}
                </button>
            );
}

export default AdvancedKey;