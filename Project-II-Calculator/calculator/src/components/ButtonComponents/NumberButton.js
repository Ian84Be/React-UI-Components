import React from 'react';
import './Button.css';

class NumberButton extends React.Component {
    render() {
        return (
            <button className={props.buttonStyle}>{props.text}</button>
        );
    }
}
export default NumberButton;
