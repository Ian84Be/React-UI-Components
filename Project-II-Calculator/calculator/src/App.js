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

function App() {
  return (
    <div className="calc-container">
      <CalculatorDisplay />
      <div className="btn-container">
        <div className="number-btns">
          <NumberButton buttons={BUTTONS} />
        </div>
        <div className="action-btns">
          <ActionButton buttons={ACTIONBUTTONS} />
        </div>
      </div>
    </div>
  );
};

export default App;
