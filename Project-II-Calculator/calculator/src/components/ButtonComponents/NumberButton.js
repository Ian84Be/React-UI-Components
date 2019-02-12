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

// class NumberButton extends React.Component {

//     numClick(num) {
//         console.log(num);
//         console.log('whaddd');
//     }

//     render() {
//         return (
//             <div className="number-btns">
//                 {this.props.buttons.map(item => {
//                     return (
//                         <button onClick={this.numClick(`${item.text}`)} key={item.text} className={`key${item.text} ${item.buttonStyle}`}>{item.text}</button>;
//                     )
//                 })}
//             </div>
//         );
//     }
// }
export default NumberButton;
