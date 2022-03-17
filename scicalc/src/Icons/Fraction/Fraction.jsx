import React from "react";
import '../Icons.css';

const Fraction = ({literal}) => {
    return (
        <div id="icon" style={{display:'flex',flexDirection:'column',alignItems:'center',fontStyle:'normal'}}>
            <div style={{margin:-3}}>{literal === true ? 'd': '■'}</div>
            <div style={{margin:-5}}>—</div>
            <div style={{margin:-3}}>{literal === true ? 'c' : '□'}</div>
        </div>
    )
};

export default Fraction;