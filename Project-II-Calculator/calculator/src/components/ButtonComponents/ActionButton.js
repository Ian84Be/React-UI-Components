import React from 'react';

function ActionButton(props) {
    let allButtons = [];
    props.buttons.forEach(item => {
        allButtons.push(
            <button key={item.text} className={`key${item.text} ${item.buttonStyle}`}>{item.text}</button>
            );
    });
    return allButtons;
}
export default ActionButton;