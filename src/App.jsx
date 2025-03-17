import './App.css';
import freeCodeCampLogo from './assets/fcc_logo.svg';
import { Button, ButtonType } from './components/Button';
import Display from './components/Display';
import ButtonClear from './components/ButtonClear';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {
  const [input, setInput] = useState('');

  const addInput = (value) => {
    setInput(input + value);
  };

  const calculate = () => {
    if (input) {
      setInput(evaluate(input));
    } else {
      alert('Insert a valid value to calculate');
    }
  };

  return (
    <>
      <div className="App">
        <div className="freecodecamp-logo-container">
          <img
            className='freecodecamp-logo'
            src={freeCodeCampLogo}
            alt="freeCodeCamp logo"
          />
        </div>
        <div className="calculator-container">
          <Display input={input} />
          <div className="row">
            <Button
              buttonType={ButtonType.NUMBER}
              handleClick={addInput}>1</Button>
            <Button
              buttonType={ButtonType.NUMBER}
              handleClick={addInput}>2</Button>
            <Button
              buttonType={ButtonType.NUMBER}
              handleClick={addInput}>3</Button>
            <Button
              buttonType={ButtonType.OPERATOR}
              handleClick={addInput}>+</Button>
          </div>
          <div className="row">
            <Button
              buttonType={ButtonType.NUMBER}
              handleClick={addInput}>4</Button>
            <Button
              buttonType={ButtonType.NUMBER}
              handleClick={addInput}>5</Button>
            <Button
              buttonType={ButtonType.NUMBER}
              handleClick={addInput}>6</Button>
            <Button
              buttonType={ButtonType.OPERATOR}
              handleClick={addInput}>-</Button>
          </div>
          <div className="row">
            <Button
              buttonType={ButtonType.NUMBER}
              handleClick={addInput}>7</Button>
            <Button
              buttonType={ButtonType.NUMBER}
              handleClick={addInput}>8</Button>
            <Button
              buttonType={ButtonType.NUMBER}
              handleClick={addInput}>9</Button>
            <Button
              buttonType={ButtonType.OPERATOR}
              handleClick={addInput}>*</Button>
          </div>
          <div className="row">
            <Button
              buttonType={ButtonType.OPERATOR}
              handleClick={calculate}>=</Button>
            <Button
              buttonType={ButtonType.NUMBER}
              handleClick={addInput}>0</Button>
            <Button
              buttonType={ButtonType.NUMBER}
              handleClick={addInput}>.</Button>
            <Button
              buttonType={ButtonType.OPERATOR}
              handleClick={addInput}>/</Button>
          </div>
          <div className="row">
            <ButtonClear
              /* This is another way to pass a function to execute it  */
              handleClick={() => setInput('')}>
              Clear
            </ButtonClear>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
