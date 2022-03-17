import React from "react";
import './BasicKey.css';

const BasicKey = (    
    {
    border,
    icon,onClick,onKeyDown, special, children
}) =>
{
    return (
        <button className={
            `basic ${special ? 'orange' : 'gray'}${border === 'top-left' || 'top-right' || 'bottom-left' || 'bottom-right' ? border: ""}`} 
           onClick={()=>onClick?.()}
           onKeyDown={()=>onKeyDown?.()}
           style = {{background: special ? '#f09206' : '#9c9c9c',borderColor: special ? '#fa9b0e' : '#a7a7a7'}}
           >
           {(icon || children) ?? "?"}
       </button>
    )
}

export default BasicKey;