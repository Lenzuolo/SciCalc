import React from "react";
import '../Icons.css';
import MixedFraction from "../MixedFraction";
import Fraction from "../Fraction";

const FractionSwitch = () => {
    return (
        <div id="icon" style={{display:'flex',justifyContent:'center',alignItems:'center',fontStyle:'normal',gap:'.4em',fontSize:'.9em'}}>
            <MixedFraction literal={true}/>
            <div>⇔</div>
            <Fraction literal={true}/>
        </div>
    )
};

export default FractionSwitch;