import React from 'react';
import './Display.css';

function CalculatorDisplay(props) {
    return (
        <div className="calc-display">
        <p>
        {props.display}
        </p>
        </div>
    )
}
export default CalculatorDisplay;