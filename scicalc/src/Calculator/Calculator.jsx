import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { ArrowKeys, Toggle } from '../Buttons';
import './Calculator.css';

const Calculator = () => 
{
    const [shift,setShift] = useState({ disabled:false, on:false });
    const [alpha,setAlpha] = useState({ disabled:false, on:false });

    const shiftHandler = () =>{
        setShift(prev=> {
            const newState = {...prev};
            newState.on = !newState.on;
            return newState;            
        });
        setAlpha(prev=> {
            const newState = {...prev};
            newState.disabled = !newState.disabled;
            return newState;
        });
    }

    const alphaHandler = () => {
        setAlpha(prev => {
            const newState = {...prev};
            newState.on = !newState.on;
            return newState;
        });
        setShift(prev=> {
            const newState = {...prev};
            newState.disabled = !newState.disabled;
            return newState;
        });
    }


    return (
        <div className="Calculator-body">
            <div className="head">
                SciCalc
            </div>
            <div className="display">
                aaa
            </div>
            <div className="functional">
                <Toggle label='Shift' disabled={shift.disabled} changeHandler={shiftHandler}/>
                <Toggle label='Alpha' disabled={alpha.disabled} changeHandler={alphaHandler}/>
                <ArrowKeys/>
            </div>
        </div>
    )
}

export default Calculator;