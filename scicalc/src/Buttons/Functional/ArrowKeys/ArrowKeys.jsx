import React from "react";
import './ArrowKeys.css';

const ArrowKeys = () => 
{
    return(
        <div className="background">
            <div className="arrow left"/>
            <div style={{display:'flex',flexDirection:"column",justifyContent:'space-between',height:'100%'}}>
                <div className="arrow top"/>
                <div className="arrow bottom"/>
            </div>
            <div className="arrow right"/>
        </div>
    )
}

export default ArrowKeys;