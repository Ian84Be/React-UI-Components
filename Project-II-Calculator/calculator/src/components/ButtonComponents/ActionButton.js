import React from 'react';

function ActionButton(props) {
    return (
        <div className="action-btns">
            {props.buttons.map(item => {
                return <button key={item.text} className={`key${item.text} ${item.buttonStyle}`}>{item.text}</button>;
            })}
        </div>
    );
}
export default ActionButton;