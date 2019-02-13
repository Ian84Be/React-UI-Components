import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';

const BUTTONS = [
  { text: 'C', buttonStyle: 'num' },
  { text: '7', buttonStyle: 'num' },
  { text: '8', buttonStyle: 'num' },
  { text: '9', buttonStyle: 'num' },
  { text: '4', buttonStyle: 'num' },
  { text: '5', buttonStyle: 'num' },
  { text: '6', buttonStyle: 'num' },
  { text: '1', buttonStyle: 'num' },
  { text: '2', buttonStyle: 'num' },
  { text: '3', buttonStyle: 'num' },
  { text: '0', buttonStyle: 'num' },

];

const ACTIONBUTTONS = [
  { text: '/', buttonStyle: 'action' },
  { text: '*', buttonStyle: 'action' },
  { text: '-', buttonStyle: 'action' },
  { text: '+', buttonStyle: 'action' },
  { text: '=', buttonStyle: 'action' },
]

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      display: '',
      num1: '',
      num2: '',
      working: false,
      oper:'',
      end: false,
    };
  }

  clickHandler = event => {
    let button = event.target.innerHTML;
    if (this.state.num1 === '') document.querySelector('.key-eq-sign').style.background = 'maroon';

    // num2 input
    if (this.state.working) {
      if (!isNaN(button)) {
        if (this.state.num2 === '') document.querySelector(`.key-eq-sign`).style.background = 'green';

        this.setState({
          display: this.state.display + button,
          num2: this.state.num2 + button
        });
      }

      // EVALUATE num1 oper num2
      else if (button === '=' && this.state.num2 !== '') {
        let result;
        let num1 = parseInt(this.state.num1,10);
        let num2 = parseInt(this.state.num2,10);
        if (this.state.oper === '*') result = num1*num2;
        if (this.state.oper === '/') result = num1/num2;
        if (this.state.oper === '+') result = num1+num2;
        if (this.state.oper === '-') result = num1-num2;
        
        // print result and clear memory
        this.setState({
          display:result,
          working:false,
          end:true,
          num1:'',
          num2:''
        });
        document.querySelector('.key-eq-sign').style.background = 'maroon';
      } //end EVALUTE
      else if (isNaN(button) && button !== 'C' && button !== '=') return;
    } //end num2
    
    // CLEAR BUTTON
    if (button === 'C') this.setState({display:'',num1:'',num2:'',working:false});

    // num1 input
    else if (!isNaN(button)) {
      if (this.state.end) {
        this.setState({display: '' + button});
        this.setState({end:false});
      }
      else this.setState({display: this.state.display + button});
    }

    // operation buttons
    else if (isNaN(button) && button !== 'C' && button !== '=') {
      if (this.state.display === '') return;
      this.setState({
        num1: this.state.display,
        oper:button,
        display: this.state.display + button,
        working: true,
        end:false,
      });
    }
  } //end clickHandler

  render() {
    return (
      <div className="calc-container">
        <CalculatorDisplay working={this.state.working} display={this.state.display} />
        <div onClick={this.clickHandler} className="btn-container">
          <NumberButton buttons={BUTTONS} />
          <ActionButton buttons={ACTIONBUTTONS} />
        </div>
      </div>
    );
  }
} //end class App

export default App;