import React from 'react';
import './Button.css';

class ActionButton extends React.Component {
    render() {
        return (
            <button className={props.buttonStyle}>{props.text}</button>
        );
    }
}
export default ActionButton;