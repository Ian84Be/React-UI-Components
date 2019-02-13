import React from 'react';

function NumberButton(props) {
    return (
        <div className="number-btns">
            {props.buttons.map(item => {
                return <button key={item.text} className={`key${item.text} ${item.buttonStyle}`}>{item.text}</button>;
            })}
        </div>
    );
}
export default NumberButton;
