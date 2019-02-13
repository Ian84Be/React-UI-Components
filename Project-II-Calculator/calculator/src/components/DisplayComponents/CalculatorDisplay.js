import React from 'react';
import './Display.css';

function CalculatorDisplay(props) {
    let backgroundColor = 'black';
    props.working ? backgroundColor = 'green' : backgroundColor = 'black';
    return (
        <div style={{background: backgroundColor}} className="calc-display">
        <p>
        {props.display}
        </p>
        </div>
    )
}
export default CalculatorDisplay;