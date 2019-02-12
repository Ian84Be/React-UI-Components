import React from 'react';

function NumberButton(props) {
    let allButtons = [];
    props.buttons.forEach(item => {
        allButtons.push(
            <button key={item.text} className={`key${item.text} ${item.buttonStyle}`}>{item.text}</button>
            );
    });
    return allButtons;
}
export default NumberButton;
