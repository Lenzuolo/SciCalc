import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { AdvancedKey, ArrowKeys, PushButton, Toggle, BasicKey } from '../Buttons';
import { Cube, CubeRoot, Logarithm, Power, Reverse, Root, Square, SquareRoot, ExpNotation, Exponent, RevSin, RevCos, RevTan, Fraction, MixedFraction, FractionSwitch } from "../Icons";
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

    const reset = () => {

    }

    const displayModes = () => {

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
                <PushButton label='Modes' changeHandler={displayModes}/>
                <PushButton label='Reset' changeHandler={reset}/>
            </div>
            <div className="advanced">
                <AdvancedKey border='top-left' icon={'Abs'}/>
                <AdvancedKey border='top-right' icon={alpha.on ? ':' : <Cube/>}/>
                <div className="space" style={{gridColumn:'span 2'}}/>
                <AdvancedKey border='top-left' icon={shift.on ? 'x!' : <Reverse/>}/>
                <AdvancedKey border='top-right' icon={<Logarithm/>}/>
                <AdvancedKey icon={shift.on ? <MixedFraction literal={false}/> : <Fraction literal={false}/>}/>
                <AdvancedKey icon={shift.on ? <CubeRoot/> : <SquareRoot/>}/>
                <AdvancedKey icon={<Square/>}/>
                <AdvancedKey icon={shift.on ? <Root/> : <Power/>}/>
                <AdvancedKey icon={shift.on ? <ExpNotation/> : 'log'}/>
                <AdvancedKey icon={shift.on ? <Exponent/> : 'ln'}/>
                <AdvancedKey icon={alpha.on ? 'A': '(-)'}/>
                <AdvancedKey icon={shift.on ? 'FACT' : alpha.on ? 'B' :'°′″'}/>
                <AdvancedKey icon={alpha.on ? 'C' : 'hyp'}/>
                <AdvancedKey icon={shift.on ? <RevSin/> : alpha.on ? 'D' : 'sin'}/>
                <AdvancedKey icon={shift.on ? <RevCos/> : alpha.on ? 'E' : 'cos'}/>
                <AdvancedKey icon={shift.on ? <RevTan/> : alpha.on ? 'F' : 'tan'}/>
                <AdvancedKey border='bottom-left' icon={shift.on ? 'STO' : 'RCL'}/>
                <AdvancedKey icon={shift.on ? '⇐' : 'ENG'}/>
                <AdvancedKey icon={shift.on ? '%' : '('}/>
                <AdvancedKey icon={shift.on ? '‘': alpha.on ? 'X' : ')'}/>
                <AdvancedKey icon={shift.on ? <FractionSwitch/> : alpha.on ? 'Y' : 'S⇔D'}/>
                <AdvancedKey border='bottom-right' icon={shift.on ? 'M-' : alpha.on ? 'M' : 'M+'}></AdvancedKey>
            </div>
            <div className="basic">
                <BasicKey border='top-left'>7</BasicKey>
                <BasicKey>8</BasicKey>
                <BasicKey>9</BasicKey>
                <BasicKey special={true}>AC</BasicKey>
                <BasicKey border='top-right' special={true}>DEL</BasicKey>
                <BasicKey>4</BasicKey>
                <BasicKey>5</BasicKey>
                <BasicKey>6</BasicKey>
                <BasicKey>×</BasicKey>
                <BasicKey>÷</BasicKey>
                <BasicKey>1</BasicKey>
                <BasicKey>2</BasicKey>
                <BasicKey>3</BasicKey>
                <BasicKey>+</BasicKey>
                <BasicKey>-</BasicKey>
                <BasicKey border='bottom-left'>0</BasicKey>
                <BasicKey>.</BasicKey>
                <BasicKey>x<ExpNotation/></BasicKey>
                <BasicKey>Ans</BasicKey>
                <BasicKey border='bottom-right'>=</BasicKey>
            </div>
        </div>
    )
}

export default Calculator;