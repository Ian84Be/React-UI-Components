import React from 'react';

function ActionButton(props) {
    return (
        <div className="action-btns">
            {props.buttons.map(item => {
                // equal sign 
                if (item.text === '=') return <button key={item.text} className={`key-eq-sign ${item.buttonStyle}`}>{item.text}</button>;
                
                // math operators
                else return <button key={item.text} className={`key-oper ${item.buttonStyle}`}>{item.text}</button>;
            })}
        </div>
    );
}
export default ActionButton;