import React from "react";
import '../Icons.css';

const MixedFraction = ({literal}) => {
    return (
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',fontStyle:'normal',gap:'.5em'}}>
            <div>{literal === true ? 'a' : '■'}</div>
            <div id="icon" style={{display:'flex',flexDirection:'column',alignItems:'center',fontStyle:'normal'}}>
                <div style={{margin:-3}}>{literal === true ? 'b' : '□'}</div>
                <div style={{margin:-5}}>—</div>
                <div style={{margin:-3}}>{literal === true ? 'c' : '□'}</div>
            </div>
        </div>
    )
};

export default MixedFraction;